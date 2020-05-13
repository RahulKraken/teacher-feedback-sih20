package types

// User - user data model
type User struct {
	ID		 		int 			`json:"id"`
	Email	 		string			`json:"email"`
	UserName 		string 			`json:"user_name"`
	Pasword  		string	 		`json:"pasword"`
	IsTeacher		bool			`json:"is_teacher"`
	IsOfficer		bool			`json:"is_officer"`
	// Questionnaire	[]Questionnaire `json:"questionnaires"`
}

// Answer - answer data model
type Answer struct {
	ID 		int 	`json:"id"`
	Text	string	`json:"text"`
}

// Question - question data model
type Question struct {
	ID 		int 	`json:"id"`
	Text	string	`json:"text"`
}

// QuestionnaireItem - pair of question and it's answer
type QuestionnaireItem struct {
	ID 			int 		`json:"id"`
	Question 	Question	`json:"ques"`
	Answer 		Answer 		`json:"ans"`
}

// Questionnaire - set of QuestionnaireItems
type Questionnaire struct {
	ID 			int 					`json:"id"`
	TimeStamp	string					`json:"time_stamp"`
	Questions	[]QuestionnaireItem 	`json:"questions"`
}


// LoginData - username and pasword
type LoginData struct {
	Username 		string 		`json:"user_name"`
	Pasword			string		`json:"pasword"`
}
