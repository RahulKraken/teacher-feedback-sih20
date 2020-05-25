import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";

export const newSession = (mode) => {
  console.log("click");
  const btn = document.getElementById("btn-ns");
  if (mode === "2") {
    btn.className = "btn-new-session-exp btn-r";
    document.getElementById("return").style.opacity = "100";
  } else {
    const newOne = btn.cloneNode(true);
    newOne.style.animation = "shake 250ms ease-out forwards";
    btn.parentNode.replaceChild(newOne, btn);
    // alert("You must be an Officer to Start a Feedback session");
  }
};

export const getReport = (mode) => {
  const btn = document.getElementById("btn-gr");
  btn.className = "btn-get-report-exp btn-r";
  document.getElementById("return").style.opacity = "100";
};

export const goBack = () => {
  const b = "btn-r";
  const bt = document.getElementsByClassName(b)[0];
  bt.className = bt.className.substring(0, bt.className.length - 10) + " btnr";
  document.getElementById("return").style.opacity = "";
};

export const getClassReport = async (data) => {
  const code = data.get("code");
  const url = "/getReport";
  const options = {
    method: "POST",
    url: url,
    headers: {
      Token: sessionStorage.getItem("token"),
    },
    data: {
      classId: code,
    },
  };
  try {
    const res = await axios(options);
    console.log(res.data);
    window.location = "/report/" + code;
  } catch (e) {
    console.log(e.response.data);
    alert(
      "Something went wrong or the Classroom Code you entered was not found. Please verify or try again later!!"
    );
  }
};

export const getSession = (data) => {
  const code = data.get("code");
  window.location = "/feedback/" + code;
};
