package model

import (
	"fmt"

	"github.com/kavkaco/Kavka-Core/utils/random"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type (
	UserID = string
	User   struct {
		UserID       UserID      `bson:"user_id" json:"user_id"`
		Name         string      `bson:"name" json:"name"`
		LastName     string      `bson:"last_name" json:"lastName"`
		Email        string      `bson:"email" json:"email"`
		Username     string      `bson:"username" json:"username"`
		Profile      Profile     `bson:"profile" json:"profile"`
		OnlineStatus interface{} `bson:"online_status" json:"onlineStatus"`
		ChatsListIDs []ChatID    `bson:"chats_list_ids"`
	}
)

func NewUser(name, lastName, email, username string) *User {
	user := User{}

	user.UserID = fmt.Sprintf("%d", random.GenerateUserID())
	user.Name = name
	user.LastName = lastName
	user.Username = username
	user.Email = email
	user.ChatsListIDs = []primitive.ObjectID{}

	return &user
}

func (u *User) FullName() string {
	return u.Name + " " + u.LastName
}
