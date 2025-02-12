package service

import (
	"context"
	"fmt"
	"testing"

	repository_mongo "github.com/kavkaco/Kavka-Core/database/repo_mongo"
	"github.com/kavkaco/Kavka-Core/infra/stream"
	"github.com/kavkaco/Kavka-Core/internal/model"
	"github.com/kavkaco/Kavka-Core/internal/repository"
	service "github.com/kavkaco/Kavka-Core/internal/service/chat"
	"github.com/kavkaco/Kavka-Core/utils"
	"github.com/kavkaco/Kavka-Core/utils/random"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ChatTestSuite struct {
	suite.Suite
	userRepo repository.UserRepository
	chatRepo repository.ChatRepository
	service  *service.ChatService

	// Created chats
	createdChannelChatID model.ChatID
	createdGroupChatID   model.ChatID
	createdDirectChatID  model.ChatID

	users [2]model.User
}

func (s *ChatTestSuite) SetupSuite() {
	ctx := context.TODO()

	chatRepo := repository_mongo.NewChatMongoRepository(db)
	userRepo := repository_mongo.NewUserMongoRepository(db)
	messageRepo := repository_mongo.NewMessageMongoRepository(db)
	streamPublisher, err := stream.NewStreamPublisher(natsClient)
	require.NoError(s.T(), err)

	s.userRepo = userRepo
	s.chatRepo = chatRepo
	s.service = service.NewChatService(nil, chatRepo, userRepo, messageRepo, streamPublisher)

	s.users = [2]model.User{
		{
			UserID:       fmt.Sprintf("%d", random.GenerateUserID()),
			Name:         "User2:Name",
			LastName:     "User2:LastName",
			Email:        "user2@kavka.org",
			Username:     "user2",
			Biography:    "User2:biography",
			ChatsListIDs: []model.ChatID{},
		},
		{
			UserID:       fmt.Sprintf("%d", random.GenerateUserID()),
			Name:         "User3:Name",
			LastName:     "User3:LastName",
			Email:        "user3@kavka.org",
			Username:     "user3",
			Biography:    "User3:biography",
			ChatsListIDs: []model.ChatID{},
		},
	}

	_, err = userRepo.Create(ctx, &s.users[0])
	require.NoError(s.T(), err)

	_, err = userRepo.Create(ctx, &s.users[1])
	require.NoError(s.T(), err)
}

func (s *ChatTestSuite) TestA_CreateChannel() {
	ctx := context.TODO()

	detailModel := model.ChannelChatDetail{
		Title:       "Channel1",
		Username:    "channel1",
		Owner:       s.users[0].UserID,
		Members:     []model.UserID{s.users[0].UserID},
		Admins:      []model.UserID{s.users[0].UserID},
		Description: "Channel1:Description",
	}

	testCases := []struct {
		userID      string
		title       string
		username    string
		description string
		Valid       bool
		Error       error
	}{
		{
			userID:      "",
			title:       "",
			username:    "",
			description: "",
			Valid:       false,
		},
		{
			userID:      detailModel.Owner,
			title:       detailModel.Title,
			username:    detailModel.Username,
			description: detailModel.Description,
			Error:       service.ErrUnableToAddChatToUsersList,
			Valid:       true,
		},
	}

	for _, tc := range testCases {
		saved, varror := s.service.CreateChannel(ctx, tc.userID, tc.title, tc.username, tc.description)
		if !tc.Valid {
			if tc.Error != nil {
				require.Equal(s.T(), tc.Error, varror.Error)
				continue
			}

			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			require.Nil(s.T(), varror)

			chatDetail, err := utils.TypeConverter[model.ChannelChatDetail](saved.ChatDetail)
			require.NoError(s.T(), err)

			require.Equal(s.T(), saved.ChatType, model.TypeChannel)
			require.Equal(s.T(), chatDetail.Title, tc.title)
			require.Equal(s.T(), chatDetail.Username, tc.username)
			require.Equal(s.T(), chatDetail.Members, detailModel.Members)
			require.Equal(s.T(), chatDetail.Admins, detailModel.Admins)
			require.Equal(s.T(), chatDetail.Owner, tc.userID)
			require.Equal(s.T(), chatDetail.Description, tc.description)

			s.createdChannelChatID = saved.ChatID
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestB_CreateGroup() {
	ctx := context.TODO()

	detailModel := model.GroupChatDetail{
		Title:       "Group1",
		Username:    "Group1",
		Owner:       s.users[0].UserID,
		Members:     []model.UserID{s.users[0].UserID},
		Admins:      []model.UserID{s.users[0].UserID},
		Description: "Group1:Description",
	}

	testCases := []struct {
		userID      string
		title       string
		username    string
		description string
		Valid       bool
		Error       error
	}{
		{
			userID:      "",
			title:       "",
			username:    "",
			description: "",
			Valid:       false,
		},
		{
			userID:      detailModel.Owner,
			title:       detailModel.Title,
			username:    detailModel.Username,
			description: detailModel.Description,
			Error:       service.ErrUnableToAddChatToUsersList,
			Valid:       true,
		},
	}

	for _, tc := range testCases {
		saved, varror := s.service.CreateGroup(ctx, tc.userID, tc.title, tc.username, tc.description)
		if !tc.Valid {
			if tc.Error != nil {
				require.Equal(s.T(), tc.Error, varror.Error)
				continue
			}

			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			require.Nil(s.T(), varror)

			chatDetail, err := utils.TypeConverter[model.GroupChatDetail](saved.ChatDetail)
			require.NoError(s.T(), err)

			require.Equal(s.T(), saved.ChatType, model.TypeGroup)
			require.Equal(s.T(), chatDetail.Title, tc.title)
			require.Equal(s.T(), chatDetail.Username, tc.username)
			require.Equal(s.T(), chatDetail.Members, detailModel.Members)
			require.Equal(s.T(), chatDetail.Admins, detailModel.Admins)
			require.Equal(s.T(), chatDetail.Owner, tc.userID)
			require.Equal(s.T(), chatDetail.Description, tc.description)

			s.createdGroupChatID = saved.ChatID
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestC_CreateDirect() {
	ctx := context.TODO()

	detailModel := &model.DirectChatDetail{
		UserID:          s.users[0].UserID,
		RecipientUserID: s.users[1].UserID,
	}

	testCases := []struct {
		userID          string
		recipientUserID string
		Valid           bool
		Error           error
	}{
		{
			userID:          "",
			recipientUserID: "",
			Valid:           false,
		},
		{
			userID:          detailModel.UserID,
			recipientUserID: detailModel.RecipientUserID,
			Valid:           true,
		},
	}

	for _, tc := range testCases {
		chat, varror := s.service.CreateDirect(ctx, tc.userID, tc.recipientUserID)
		if !tc.Valid {
			if tc.Error != nil {
				require.Equal(s.T(), tc.Error, varror.Error)
				continue
			}

			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			require.Nil(s.T(), varror)

			chatDetail, err := utils.TypeConverter[model.DirectChatDetailDTO](chat.ChatDetail)
			require.NoError(s.T(), err)

			require.Equal(s.T(), chatDetail.Recipient.UserID, tc.userID)

			s.createdDirectChatID = chat.ChatID
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestD_GetChat_Channel() {
	ctx := context.TODO()

	testCases := []struct {
		chatID primitive.ObjectID
		Valid  bool
		Error  error
	}{
		{
			chatID: model.NewChatID(),
			Error:  service.ErrNotFound,
			Valid:  false,
		},
		{
			chatID: s.createdChannelChatID,
			Valid:  true,
		},
	}

	for _, tc := range testCases {
		chat, varror := s.service.GetChat(ctx, s.users[0].UserID, tc.chatID)
		if !tc.Valid {
			if tc.Error != nil {
				require.Equal(s.T(), tc.Error, varror.Error)
				continue
			}

			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			require.Nil(s.T(), varror)

			require.NotEmpty(s.T(), chat)
			require.Equal(s.T(), chat.ChatID, tc.chatID)
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestE_GetChat_Group() {
	ctx := context.TODO()

	testCases := []struct {
		chatID primitive.ObjectID
		Valid  bool
		Error  error
	}{
		{
			chatID: model.NewChatID(),
			Error:  service.ErrNotFound,
			Valid:  false,
		},
		{
			chatID: s.createdGroupChatID,
			Valid:  true,
		},
	}

	for _, tc := range testCases {
		chat, varror := s.service.GetChat(ctx, s.users[0].UserID, tc.chatID)
		if !tc.Valid {
			if tc.Error != nil {
				require.Equal(s.T(), tc.Error, varror.Error)
				continue
			}

			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			require.Nil(s.T(), varror)

			require.NotEmpty(s.T(), chat)
			require.Equal(s.T(), chat.ChatID, tc.chatID)
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestF_GetUserChats() {
	ctx := context.TODO()
	userModel1 := &s.users[0]

	userModel1.ChatsListIDs = []model.ChatID{
		s.createdChannelChatID,
		s.createdGroupChatID,
		s.createdDirectChatID,
	}

	testCases := []struct {
		userID string
		Valid  bool
		Error  error
	}{
		{
			userID: "",
			Valid:  false,
		},
		{
			userID: "invalid",
			Error:  service.ErrNotFound,
			Valid:  false,
		},
		{
			userID: userModel1.UserID,
			Valid:  true,
		},
	}

	for _, tc := range testCases {
		userChatsList, varror := s.service.GetUserChats(ctx, tc.userID)
		if !tc.Valid {
			if tc.Error != nil {
				require.Equal(s.T(), tc.Error, varror.Error)
				continue
			}

			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			require.Nil(s.T(), varror)

			for _, v := range userChatsList {
				switch v.ChatType {
				case model.TypeChannel:
					require.Equal(s.T(), v.ChatID, s.createdChannelChatID)
				case model.TypeGroup:
					require.Equal(s.T(), v.ChatID, s.createdGroupChatID)
				case model.TypeDirect:
					require.Equal(s.T(), v.ChatID, s.createdDirectChatID)
				}
			}
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestG_JoinChat_Channel() {
	ctx := context.TODO()

	// Create a plain channel chat
	detailModel := model.ChannelChatDetail{
		Title:       "Channel3",
		Username:    "channel3",
		Owner:       s.users[0].UserID,
		Members:     []model.UserID{},
		Admins:      []model.UserID{},
		Description: "Channel3:Description",
	}
	channelChat, err := s.chatRepo.Create(ctx, model.Chat{
		ChatID:     model.NewChatID(),
		ChatType:   model.TypeChannel,
		ChatDetail: detailModel,
	})
	require.NoError(s.T(), err)

	userID := s.users[1].UserID

	testCases := []struct {
		chatID primitive.ObjectID
		userID string
		Valid  bool
	}{
		{
			chatID: model.NewChatID(),
			userID: "invalid",
			Valid:  false,
		},
		{
			chatID: channelChat.ChatID,
			userID: "invalid",
			Valid:  false,
		},
		{
			chatID: channelChat.ChatID,
			userID: userID,
			Valid:  true,
		},
	}

	for _, tc := range testCases {
		joinResult, varror := s.service.JoinChat(ctx, tc.chatID, tc.userID)
		if !tc.Valid {
			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			if varror != nil {
				s.T().Log(varror.Error)
			}

			require.Nil(s.T(), varror)
			require.True(s.T(), joinResult.Joined)
			require.NotEmpty(s.T(), joinResult.UpdatedChat)

			chat, err := s.chatRepo.GetChat(ctx, tc.chatID)
			require.Nil(s.T(), err)

			chatDetail, err := utils.TypeConverter[model.GroupChatDetail](chat.ChatDetail)
			require.Nil(s.T(), err)

			require.True(s.T(), chatDetail.IsMember(tc.userID))
		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestH_JoinChat_Group() {
	ctx := context.TODO()

	// Create a plain channel chat
	detailModel := model.GroupChatDetail{
		Title:       "Group3",
		Username:    "Group3",
		Owner:       s.users[0].UserID,
		Members:     []model.UserID{},
		Admins:      []model.UserID{},
		Description: "Group3:Description",
	}
	groupChat, err := s.chatRepo.Create(ctx, model.Chat{
		ChatID:     model.NewChatID(),
		ChatType:   model.TypeGroup,
		ChatDetail: detailModel,
	})
	require.NoError(s.T(), err)

	userID := s.users[1].UserID

	testCases := []struct {
		chatID primitive.ObjectID
		userID string
		Valid  bool
	}{
		{
			chatID: model.NewChatID(),
			userID: "invalid",
			Valid:  false,
		},
		{
			chatID: groupChat.ChatID,
			userID: "invalid",
			Valid:  false,
		},
		{
			chatID: groupChat.ChatID,
			userID: userID,
			Valid:  true,
		},
	}

	for _, tc := range testCases {
		joinResult, varror := s.service.JoinChat(ctx, tc.chatID, tc.userID)
		if !tc.Valid {
			require.NotNil(s.T(), varror)
		} else if tc.Valid {
			if varror != nil {
				s.T().Log(varror.Error)
			}

			require.Nil(s.T(), varror)
			require.True(s.T(), joinResult.Joined)
			require.NotEmpty(s.T(), joinResult.UpdatedChat)

			chat, err := s.chatRepo.GetChat(ctx, tc.chatID)
			require.Nil(s.T(), err)

			chatDetail, err := utils.TypeConverter[model.GroupChatDetail](chat.ChatDetail)
			require.Nil(s.T(), err)

			require.True(s.T(), chatDetail.IsMember(tc.userID))

		} else {
			require.Fail(s.T(), "not specific")
		}
	}
}

func (s *ChatTestSuite) TestI_GetDirectChat() {
	ctx := context.TODO()

	chat, varror := s.service.GetDirectChat(ctx, s.users[0].UserID, s.users[1].UserID)
	require.Empty(s.T(), varror)
	require.NotEmpty(s.T(), chat)
}

func TestChatSuite(t *testing.T) {
	t.Helper()
	suite.Run(t, new(ChatTestSuite))
}
