import React from "react";
import "../styles/dashboard.css";
import logsplurl from "../images/loginsplash.jpg";
import webbg from "../images/loginweb.jpg";

const Dashboard = ({ user, mode }) => {
  return (
    <div className="dashb-cont">
      <h1>Welcome {user}!</h1>
      <div className="dash-btns">
        <div className="btn-new-session"></div>
        <div className="btn-get-report"></div>
      </div>
    </div>
  );
};

export default Dashboard;
