import React, { Component } from "react";
import { getQuestions } from "../utils/requests";

class Feedback extends Component {
  state = {
    questionnaire: [],
  };

  async componentDidMount() {
    const quests = await getQuestions();
    console.log(quests);
  }
  render() {
    return (
      <div className="feed-back-con">
        <h1>This is Feedback Page</h1>
      </div>
    );
  }
}

export default Feedback;
