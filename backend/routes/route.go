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
	log.Println("GET : GetReport")
	var classID types.ClassID
	log.Println(classID)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&classID)
	if err != nil {
		log.Panic("error decoding request body")
	}
	log.Println("classID: ", classID.ClassID)
	report, err := database.GetReport(classID.ClassID)
	if err != nil {
		log.Panic("error fetching report")
		http.Error(w, "failed to fetch reports", http.StatusInternalServerError)
	}
	encoder := json.NewEncoder(w)
	err = encoder.Encode(report)
	if err != nil {
		log.Println("error sending report")
		http.Error(w, "error receiving report", http.StatusInternalServerError)
	}
}

// GetQuestionnaire - get questionnaire for given classroom
func GetQuestionnaire(w http.ResponseWriter, r *http.Request) {
	log.Println("GET - GetQuestionnaire")
	http.ServeFile(w, r, "static/questions.json")
}

// SubmitFeedback - submit the feedback
func SubmitFeedback(w http.ResponseWriter, r *http.Request) {
	log.Println("POST - SubmitFeedback")
	var feedback types.Questionnaire
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&feedback); err != nil {
		log.Println("error unmarshaling json")
		http.Error(w, "error submitting feeback", http.StatusInternalServerError)
	}
	err := database.AddQuestionnaireToUser(feedback.ClassID, feedback)
	if err != nil {
		log.Println("error saving feedback")
		http.Error(w, "error submitting feedback", http.StatusInternalServerError)
	}
}
