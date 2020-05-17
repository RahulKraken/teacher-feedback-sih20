package auth

import (
	"fmt"
	"encoding/json"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/hash"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/types"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/database"
	"log"
	"net/http"
)

// CORSDecorator - wrapper for CORS
type CORSDecorator struct {
	R *mux.Router
}

// CORSDecorator - it will apply the CORS headers to the mux Router
func (c *CORSDecorator) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	origin := r.Header.Get("Origin")
	// set the headers
	if origin != "" {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, Token")
	}

	// if preflight OPTIONS request then stop here
	if r.Method == "OPTIONS" {
		return
	}

	c.R.ServeHTTP(w, r)
}


// auth handlers

// HandleAuth - authentication middleware
func HandleAuth(endpoint func(http.ResponseWriter, *http.Request)) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Header["Token"] != nil {
			log.Println("Token:", r.Header["Token"][0])
			token, err := jwt.Parse(r.Header["Token"][0], func(token *jwt.Token) (i interface{}, e error) {
				_, ok := token.Method.(*jwt.SigningMethodHMAC); if !ok {
					return nil, fmt.Errorf("something wrong happened")
				}

				return hash.MySigningKey, nil
			})

			if err != nil {
				log.Println("Something wrong happened:", err.Error())
				http.Error(w, "Could not authenticate", http.StatusUnauthorized)
				return
			}

			if token.Valid {
				endpoint(w, r)
			}
		} else {
			log.Println("Unauthorized")
			http.Error(w, "Error authenticating", http.StatusUnauthorized)
		}
	})
}


// SignUpHandler - handles signup requests
func SignUpHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Hit", "/signup", r.Method)
	var user types.User
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&user); if err != nil {
		log.Println("Could not parse request", err)
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	log.Println("username:", user.UserName, "; email:", user.Email, "; pasword:", user.Pasword)

	// check if user already exists
	b := database.ExistsUser(user.Email)
	if b {
		// user already exists
		log.Println("User exists")
		http.Error(w, "user already exists", http.StatusBadRequest)
		return
	}

	// create user
	err = database.CreateUser(user)

	if err != nil {
		log.Println("Error creating user")
		http.Error(w, "Something wrong happened", http.StatusInternalServerError)
	}

	// generate and send JWT
	token, err := hash.GenerateJWT(user.Email)
	if err != nil {
		log.Println("Error generating JWT")
		http.Error(w, "Something wrong happened", http.StatusInternalServerError)
	}

	createdUser, err := database.GetUser(user.Email)
	if err != nil {
		log.Println("Couldn't create user")
		http.Error(w, "Something wrong happended", http.StatusInternalServerError)
	}

	// anonymous struct to send token
	response := struct {
		AuthToken		string		`json:"token"`
		ID					int				`json:"id"`
		Username		string		`json:"username"`
		Email				string		`json:"email"`
		IsTeacher		bool			`json:"is_teacher"`
		IsOfficer 	bool			`json:"is_officer"`
	}{
		AuthToken:	token,
		ID:					createdUser.ID,
		Username:		createdUser.UserName,
		Email:			createdUser.Email,
		IsTeacher: 	createdUser.IsTeacher,
		IsOfficer: 	createdUser.IsOfficer,
	}

	log.Println(response)

	encoder := json.NewEncoder(w)
	err = encoder.Encode(response)
	if err != nil {
		log.Println("Error sending JWT token")
		http.Error(w, "Something wrong happened", http.StatusInternalServerError)
	}
}

// LoginHandler - handles login requests
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Hit", "/login", r.Method)
	var data types.LoginData
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&data); if err != nil {
		log.Println("Could not parse request", err)
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	log.Println("email:", data.Email, "; pasword:", data.Pasword)

	// check if username exists
	b := database.ExistsUser(data.Email)
	if !b {
		log.Println("User does not exist")
		http.Error(w, "User does not exist", http.StatusNotFound)
		return
	}

	// check if credentials match
	b = database.MatchCredentials(data)
	if !b {
		log.Println("Incorrect password")
		http.Error(w, "Incorrect password", http.StatusBadRequest)
		return
	}

	// generate and send jwt
	token, err := hash.GenerateJWT(data.Email)
	if err != nil {
		log.Println("Error generating JWT")
		http.Error(w, "Something wrong happened", http.StatusInternalServerError)
		return
	}

	user, err := database.GetUser(data.Email)
	if err != nil {
		log.Println("user not found")
		http.Error(w, "User not found", http.StatusInternalServerError)
		return
	}

	// anonymous struct to send token
	response := struct {
		AuthToken		string		`json:"token"`
		ID				int			`json:"id"`
		Username		string		`json:"username"`
		Email			string		`json:"email"`
		IsTeacher		bool			`json:"is_teacher"`
		IsOfficer 	bool			`json:"is_officer"`
	}{
		AuthToken:	token,
		ID:			user.ID,
		Username:	user.UserName,
		Email:		user.Email,
		IsTeacher: 	user.IsTeacher,
		IsOfficer: 	user.IsOfficer,
	}

	encoder := json.NewEncoder(w)
	err = encoder.Encode(response)
	if err != nil {
		log.Println("Error sending JWT token")
		http.Error(w, "Something wrong happened", http.StatusInternalServerError)
	}
}
