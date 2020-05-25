import React, { Component } from "react";
import { fetchReport } from "../utils/requests";
import { Accordion } from "react-bootstrap";
import Cards from "./card";
import "../styles/report.css";
import ReportList from "./reportList";

class Report extends Component {
  state = {
    data: [],
    current: 0,
  };

  async componentDidMount() {
    const { code } = this.props;
    const data = await fetchReport(code);
    console.log(data, code);
    this.setState({ data });
  }

  handleChange = (n) => {
    console.log("clicked", n);
    this.setState({ current: n });
  };

  render() {
    const { data, current } = this.state;
    const set = data[current];
    console.log(data, set);
    let n = -1;
    if (set !== undefined) {
      console.log(set.questions);
      return (
        <div className="rep">
          <h1 className="h-rep">Reports</h1>
          <div className="list">
            <div className="repo-list">
              <ReportList
                style={{ display: "inline-block" }}
                data={data}
                onChange={(option) => this.handleChange(option)}
              />
            </div>
            <div className="rep-con">
              <h2>{set.time_stamp}</h2>
              <Accordion defaultActiveKey="0">
                {set.questions.map((items) => {
                  ++n;
                  return (
                    <Cards
                      key={n}
                      n={n}
                      body={items.ans.text}
                      que={items.ques.text}
                    />
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Report;
