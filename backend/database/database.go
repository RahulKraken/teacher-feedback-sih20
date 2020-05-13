package database

import (
	"context"
	"fmt"
	"log"
	"time"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/types"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	db *mongo.Database
	users *mongo.Collection
	questionnaire *mongo.Collection
)

func ExistsEmail(email string) bool {
	return false
}

func ExistsUsername(username string) bool {
	return false
}

func CreateUser(user types.User) error {
	ctx, _ := context.WithTimeout(context.Background(), 5 * time.Second)
	res, err := users.InsertOne(ctx, user)
	if err != nil {
		log.Println("couldn't create user: ", err.Error())
		return err
	}
	fmt.Print("created user: ", res.InsertedID)
	return nil
}

// func GetUserWithUsername(username string) types.User {
// 	return nil
// }

func MatchCredentials(data types.LoginData) bool {
	return false
}

func deleteUser(user types.User) error {
	return nil
}

func updateUser(user types.User) error {
	return nil
}

func AddQuestionnaireToUser(user types.User, data types.Questionnaire) error {
	opts := options.Update().SetUpsert(true)
	filter := bson.M {"email" : bson.M {
		"$eq": user.Email,
	}}
	update := bson.M {
		"$push": bson.M {
			"data": data,
		},
	}
	ctx, _ := context.WithTimeout(context.Background(), 5 * time.Second)
	res, err := questionnaire.UpdateOne(ctx, filter, update, opts)
	if err != nil {
		log.Println("couldn't udpate questionnaire", err.Error())
		return err
	}
	log.Println("udpated questionnaire", res.UpsertedID)
	return nil
}

func init() {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		panic(err.Error())
	}
	ctx, close := context.WithTimeout(context.Background(), 10 * time.Second)
	defer close()
	err = client.Connect(ctx)
	if err != nil {
		log.Println("could not connect to db... exiting")
		panic(err.Error())
	}
	log.Printf("connection successful!\n")
	db = client.Database("sih20")
	users = db.Collection("users")
	questionnaire = db.Collection("questionniare")
}