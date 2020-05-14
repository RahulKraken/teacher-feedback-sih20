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
	r.Handle("/getReport", auth.HandleAuth(route.GetReport)).Methods("POST")
	r.Handle("/getQuestionnaire", auth.HandleAuth(route.GetQuestionnaire)).Methods("GET")
	r.Handle("/submitFeedback", auth.HandleAuth(route.SubmitFeedback)).Methods("POST")

	err := http.ListenAndServe(":5000", r)
	if err != nil {
		panic(err.Error())
	}
}