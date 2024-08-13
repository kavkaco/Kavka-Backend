package message

import (
	"context"

	"github.com/kavkaco/Kavka-Core/infra/stream"
	"github.com/kavkaco/Kavka-Core/internal/model"
	"github.com/kavkaco/Kavka-Core/internal/repository"
	"github.com/kavkaco/Kavka-Core/log"
	eventsv1 "github.com/kavkaco/Kavka-Core/protobuf/gen/go/protobuf/events/v1"
	"github.com/kavkaco/Kavka-Core/protobuf/proto_model_transformer"
	"github.com/kavkaco/Kavka-Core/utils/vali"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"google.golang.org/protobuf/proto"
)

type MessageService interface {
	FetchMessages(ctx context.Context, chatID model.ChatID) (*model.ChatMessages, *vali.Varror)
	UpdateTextMessage(ctx context.Context, chatID model.ChatID, newMessageContent string) *vali.Varror
	SendTextMessage(ctx context.Context, chatID model.ChatID, userID model.UserID, messageContent string) (*model.MessageGetter, *vali.Varror)
	DeleteMessage(ctx context.Context, chatID model.ChatID, userID model.UserID, messageID model.MessageID) *vali.Varror
}

type MessageManager struct {
	logger         *log.SubLogger
	messageRepo    repository.MessageRepository
	chatRepo       repository.ChatRepository
	userRepo       repository.UserRepository
	validator      *vali.Vali
	eventPublisher stream.StreamPublisher
}

func NewMessageService(logger *log.SubLogger, messageRepo repository.MessageRepository, chatRepo repository.ChatRepository, userRepo repository.UserRepository, eventPublisher stream.StreamPublisher) MessageService {
	return &MessageManager{logger, messageRepo, chatRepo, userRepo, vali.Validator(), eventPublisher}
}

func (s *MessageManager) FetchMessages(ctx context.Context, chatID model.ChatID) (*model.ChatMessages, *vali.Varror) {
	chatMessages, err := s.messageRepo.FetchMessages(ctx, chatID)
	if err != nil {
		return nil, &vali.Varror{Error: err}
	}

	return chatMessages, nil
}

func (s *MessageManager) SendTextMessage(ctx context.Context, chatID model.ChatID, userID model.UserID, messageContent string) (*model.MessageGetter, *vali.Varror) {
	validationErrors := s.validator.Validate(InsertTextMessageValidation{chatID, userID, messageContent})
	if len(validationErrors) > 0 {
		return nil, &vali.Varror{ValidationErrors: validationErrors}
	}

	c, err := s.chatRepo.FindByID(ctx, chatID)
	if err != nil {
		return nil, &vali.Varror{Error: ErrChatNotFound}
	}

	if !HasAccessToSendMessage(c.ChatType, c.ChatDetail, userID) {
		return nil, &vali.Varror{Error: ErrAccessDenied}
	}

	m, err := s.messageRepo.Insert(ctx, chatID, model.NewMessage(model.TypeTextMessage, model.TextMessage{
		Text: messageContent,
	}, userID))
	if err != nil {
		return nil, &vali.Varror{Error: ErrInsertMessage}
	}

	u, err := s.userRepo.FindByUserID(ctx, userID)
	if err != nil {
		return nil, &vali.Varror{Error: err}
	}

	messageGetter := &model.MessageGetter{
		Sender: &model.MessageSender{
			UserID:   u.UserID,
			Name:     u.Name,
			LastName: u.LastName,
			Username: u.Username,
		},
		Message: m,
	}

	if s.eventPublisher != nil {
		go func() {
			eventReceivers, receiversErr := ReceiversIDs(c)
			if receiversErr != nil {
				s.logger.Error(receiversErr.Error())
				return
			}

			payloadProtoBuf, marshalErr := proto.Marshal(&eventsv1.SubscribeEventsStreamResponse{
				Name: "add-message",
				Type: eventsv1.SubscribeEventsStreamResponse_TYPE_ADD_MESSAGE,
				Payload: &eventsv1.SubscribeEventsStreamResponse_AddMessage{
					AddMessage: &eventsv1.AddMessage{
						ChatId:  chatID.Hex(),
						Message: proto_model_transformer.MessageToProto(messageGetter),
					},
				},
			},
			)
			if marshalErr != nil {
				s.logger.Error("proto marshal error: " + marshalErr.Error())
				return
			}

			publishErr := s.eventPublisher.Publish(&eventsv1.StreamEvent{
				SenderUserId:    userID,
				ReceiversUserId: eventReceivers,
				Payload:         payloadProtoBuf,
			})
			if publishErr != nil {
				s.logger.Error("unable to publish add-chat event in eventPublisher: " + publishErr.Error())
			}
		}()
	}

	return messageGetter, nil
}

func (s *MessageManager) DeleteMessage(ctx context.Context, chatID model.ChatID, userID model.UserID, messageID model.MessageID) *vali.Varror {
	validationErrors := s.validator.Validate(DeleteMessageValidation{chatID, userID, messageID})
	if len(validationErrors) > 0 {
		return &vali.Varror{ValidationErrors: validationErrors}
	}

	chat, err := s.chatRepo.FindByID(ctx, chatID)
	if err != nil {
		return &vali.Varror{Error: ErrChatNotFound}
	}

	message, err := s.messageRepo.FindMessage(ctx, chatID, messageID)
	if err != nil {
		return &vali.Varror{Error: ErrNotFound}
	}

	if HasAccessToDeleteMessage(chat.ChatType, chat.ChatDetail, userID, *message) {
		err = s.messageRepo.Delete(ctx, chatID, messageID)
		if err != nil {
			return &vali.Varror{Error: ErrDeleteMessage}
		}

		return nil
	}

	return &vali.Varror{Error: ErrAccessDenied}
}

// TODO - Implement UpdateTextMessage Method For MessageService
func (s *MessageManager) UpdateTextMessage(ctx context.Context, chatID primitive.ObjectID, newMessageContent string) *vali.Varror {
	panic("unimplemented")
}
