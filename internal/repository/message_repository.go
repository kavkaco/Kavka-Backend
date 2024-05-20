package repository

import (
	"context"

	"github.com/kavkaco/Kavka-Core/database"
	"github.com/kavkaco/Kavka-Core/internal/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MessageRepository interface {
	Create(ctx context.Context, chatID model.ChatID) error
	FetchMessages(ctx context.Context, chatID model.ChatID) ([]model.Message, error)
	Insert(ctx context.Context, chatID model.ChatID, message *model.Message) (*model.Message, error)
	UpdateMessageContent(ctx context.Context, chatID model.ChatID, messageID model.MessageID, newMessageContent string) error
	Delete(ctx context.Context, chatID model.ChatID, messageID model.MessageID) error
}

type messageRepository struct {
	messagesCollection *mongo.Collection
}

func NewMessageRepository(db *mongo.Database) MessageRepository {
	return &messageRepository{db.Collection(database.MessagesCollection)}
}

func (repo *messageRepository) Create(ctx context.Context, chatID model.ChatID) error {
	messageStoreModel := model.MessageStore{
		ChatID:   chatID,
		Messages: []model.Message{},
	}
	_, err := repo.messagesCollection.InsertOne(ctx, messageStoreModel)
	if err != nil {
		return nil
	}

	return nil
}

func (repo *messageRepository) FetchMessages(ctx context.Context, chatID model.ChatID) ([]model.Message, error) {
	filter := bson.M{"chat_id": chatID}
	result := repo.messagesCollection.FindOne(ctx, filter)
	if result.Err() != nil {
		if database.IsRowExistsError(result.Err()) {
			return nil, ErrChatNotFound
		}

		return nil, result.Err()
	}

	var messageStore *model.MessageStore
	err := result.Decode(&messageStore)
	if err != nil {
		return nil, err
	}

	return messageStore.Messages, nil
}

func (repo *messageRepository) Insert(ctx context.Context, chatID model.ChatID, message *model.Message) (*model.Message, error) {
	filter := bson.M{"chat_id": chatID}
	update := bson.M{"$push": bson.M{"messages": message}}

	result := repo.messagesCollection.FindOneAndUpdate(ctx, filter, update)
	if result.Err() != nil {
		if database.IsRowExistsError(result.Err()) {
			return nil, ErrChatNotFound
		}
		return nil, result.Err()
	}

	return message, nil
}

func (repo *messageRepository) UpdateMessageContent(ctx context.Context, chatID model.ChatID, messageID model.MessageID, newMessageContent string) error {
	return repo.updateMessageFields(ctx, chatID, messageID, bson.M{"$set": bson.M{
		"messages.$.content.data": newMessageContent,
	}})
}

func (repo *messageRepository) updateMessageFields(ctx context.Context, chatID model.ChatID, messageID model.MessageID, updateQuery bson.M) error {
	filter := bson.M{"chat_id": chatID, "messages": bson.M{"$elemMatch": bson.M{"message_id": messageID}}}

	result, err := repo.messagesCollection.UpdateOne(ctx, filter, updateQuery)
	if err != nil {
		if database.IsRowExistsError(err) {
			return ErrChatNotFound
		}

		return err
	}

	if result.MatchedCount == 0 || result.ModifiedCount == 0 {
		return ErrNotModified
	}

	return nil
}

func (repo *messageRepository) Delete(ctx context.Context, chatID model.ChatID, messageID model.MessageID) error {
	filter := bson.M{"chat_id": chatID}
	update := bson.M{"$pull": bson.M{"messages": bson.M{"message_id": messageID}}}

	result, err := repo.messagesCollection.UpdateOne(ctx, filter, update)
	if err != nil && result.ModifiedCount != 1 {
		if database.IsRowExistsError(err) {
			return ErrChatNotFound
		}

		return err
	}

	return nil
}
