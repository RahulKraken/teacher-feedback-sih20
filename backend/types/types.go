package types

type User struct {
	ID		 int 	`json:"id"`
	Email	 string	`json:"email"`
	UserName string `json:"user_name"`
	Pasword  string `json:"pasword"`
}

type Answer struct {
	ID 		int 	`json:"id"`
	Text	string	`json:"text"`
}

type Question struct {
	ID 		int 	`json:"id"`
	Text	string	`json:"text"`
}

type QuestionnaireItem struct {
	ID 			int 		`json:"id"`
	Question 	Question	`json:"ques"`
	Answer 		Answer 		`json:"ans"`
}

type Questionnaire struct {
	ID 			int 					`json:"id"`
	Questions	[]QuestionnaireItem 	`json:"questions"`
}
