import React from "react";
import "../styles/dashboard.css";
import re from "../icons/return.png";
import nse from "../icons/letter.png";
import ger from "../icons/report.png";
import * as onClicks from "../utils/onClicks";
import Choice from "./choices";

const Dashboard = ({ user, mode }) => {
  return (
    <div className="dashb-cont">
      <div className="wel">
        <h1 className="hl1">Welcome,</h1>
        <h1 className="hl2">{user}!</h1>
      </div>
      <div className="dash-btns">
        <img
          alt="backButton"
          src={re}
          id="return"
          onClick={onClicks.goBack}
        ></img>
        <Choice
          className="btn-new-session btnr"
          id="btn-ns"
          handleClick={onClicks.newSession}
          msg="Start a new Feedback Session"
          icon={nse}
          mode={mode}
        />
        <Choice
          className="btn-get-report btnr"
          id="btn-gr"
          handleClick={onClicks.getReport}
          msg="Get Feedback report of a Class"
          icon={ger}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default Dashboard;
