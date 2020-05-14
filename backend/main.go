package main

import (
	"net/http"
	"github.com/gorilla/mux"
	"encoding/json"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/types"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/auth"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/routes"
	_ "github.com/RahulKraken/teacher-feedback-sih20/backend/database"
	"fmt"
)

func addUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("adding user")
	var user types.User
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&user); if err != nil {
		panic(err.Error())
	}
	fmt.Printf("username: %s, email: %s\n", user.UserName, user.Email)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/adduser", addUser).Methods("POST")
	r.HandleFunc("/login", auth.LoginHandler).Methods("POST")
	r.HandleFunc("/signup", auth.SignUpHandler).Methods("POST")
	r.HandleFunc("/getReport", route.GetReport).Methods("POST")
	r.HandleFunc("/getQuestionnaire", route.GetQuestionnaire).Methods("GET")

	err := http.ListenAndServe(":5000", r)
	if err != nil {
		panic(err.Error())
	}
}