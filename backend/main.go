package main

import (
	"net/http"
	"github.com/gorilla/mux"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/auth"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/routes"
	_ "github.com/RahulKraken/teacher-feedback-sih20/backend/database"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/login", auth.LoginHandler).Methods("POST")
	r.HandleFunc("/signup", auth.SignUpHandler).Methods("POST")
	r.HandleFunc("/getReport", route.GetReport).Methods("POST")
	r.HandleFunc("/getQuestionnaire", route.GetQuestionnaire).Methods("GET")
	r.HandleFunc("/submitFeedback", route.SubmitFeedback).Methods("POST")

	err := http.ListenAndServe(":5000", r)
	if err != nil {
		panic(err.Error())
	}
}