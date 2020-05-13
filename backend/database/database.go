package database

import (
	"time"
	"context"
	"log"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	db *mongo.Database
	questionnaire *mongo.Collection
)

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
}