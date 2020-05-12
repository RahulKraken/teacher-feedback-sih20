package auth

import (
	"fmt"
	"encoding/json"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/hash"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/types"
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
		panic(err.Error())
	}
	log.Printf("usename: %s, email: %s, pasword: %s\n", user.UserName, user.Email, user.Pasword)
}

// LoginHandler - handles login requests
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Hit", "/login", r.Method)
	var user types.User
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&user); if err != nil {
		panic(err.Error())
	}
	log.Printf("usename: %s, pasword: %s\n", user.UserName, user.Pasword)
}
