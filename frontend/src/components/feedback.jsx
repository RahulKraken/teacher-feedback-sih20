import React, { Component } from "react";
import { getQuestion, makeReport, submitReport } from "../utils/requests";
import Feeds from "./feeds";
import { Accordion, Form } from "react-bootstrap";
import "../styles/feed.css";

class Feedback extends Component {
  state = {
    quest: {},
  };

  async componentDidMount() {
    const quest = await getQuestion();
    this.setState({ quest });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { code } = this.props;
    const data = new FormData(e.target);
    const { quest } = this.state;
    const report = makeReport(data, quest, code);
    submitReport(report);
  };
  render() {
    const { quest } = this.state;
    const quests = quest.questions;
    console.log(quests);
    if (quests !== undefined) {
      return (
        <div className="feed-back-con">
          <h1>This is Feedback Page</h1>
          <div className="fb-con">
            <Form className="feed-form" onSubmit={this.handleSubmit}>
              <Accordion defaultActiveKey="0">
                {quests.map((item) => (
                  <Feeds que={item.ques.text} _id={item.ques.id} />
                ))}
              </Accordion>
              <button type="submit" className="feed-btn">
                Submit
              </button>
            </Form>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Feedback;
