import React, { useState } from "react";
import "../styles/dashboard.css";
import re from "../icons/return.png";
import * as onClicks from "../utils/onClicks";

const Dashboard = ({ user, mode }) => {
  return (
    <div className="dashb-cont">
      <div className="wel">
        <h1 className="hl1">Welcome,</h1>
        <h1 className="hl2">{user}!</h1>
      </div>
      <div className="dash-btns">
        <img src={re} id="return" onClick={onClicks.goBack}></img>
        <div
          id="btn-ns"
          className="btn-new-session btnr"
          onClick={onClicks.newSession}
        ></div>
        <div
          id="btn-gr"
          className="btn-get-report btnr"
          onClick={onClicks.getReport}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
