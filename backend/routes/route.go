package route

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/RahulKraken/teacher-feedback-sih20/backend/database"
	"github.com/RahulKraken/teacher-feedback-sih20/backend/types"
)

// GetReport - gets all reports for given user
func GetReport(w http.ResponseWriter, r *http.Request) {
	log.Println("POST : GetReport")
	var user types.User
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&user); if err != nil {
		log.Panic("error decoding request body")
	}
	log.Println("email: ", user.Email)
	report, err := database.GetReport(user.Email)
	if err != nil {
		log.Panic("error fetching report")
		http.Error(w, "failed to fetch reports", http.StatusInternalServerError)
	}
	encoder := json.NewEncoder(w)
	err = encoder.Encode(report); if err != nil {
		log.Println("error sending report")
		http.Error(w, "error receiving report", http.StatusInternalServerError)
	}
}

// GetQuestionnaire - get questionnaire for given classroom
func GetQuestionnaire(w http.ResponseWriter, r *http.Request) {
	log.Println("GET - GetQuestionnaire")
	http.ServeFile(w, r, "static/questions.json")
}

// Submit Feedback - submit the feedback