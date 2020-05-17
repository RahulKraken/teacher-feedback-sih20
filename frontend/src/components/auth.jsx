import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "react-bootstrap";
import "../styles/login.css";
import logsplurl from "../images/loginsplash.jpg";
import webbg from "../images/loginweb.jpg";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

const Login = () => {
  const imgurl = window.innerWidth >= 650 ? webbg : logsplurl;
  const bd = document.body;
  bd.style.backgroundImage = "url('" + imgurl + "')";

  //states
  const [mode, setMode] = useState(1);

  function toggle() {
    const _mode = mode;
    const card = document.getElementById("splash");
    const text = document.getElementById("par");
    const btn = document.getElementById("btn");
    const con = document.getElementById("cont");

    if (mode == 1) {
      card.style.transform = "translateX(400px)";
      card.style.borderRadius = "0 10px 10px 0";
      text.innerText = "Already have an Account ?";
      btn.innerText = "Login";
      con.style.height = "600px";
      card.style.height = "600px";
    } else {
      card.style.transform = "translateX(0)";
      card.style.borderRadius = "10px 0 0 10px";
      text.innerText = "Don't have an Account ?";
      btn.innerText = "Signup";
      con.style.height = "500px";
      card.style.height = "500px";
    }
    setMode(-1 * _mode);
  }

  return (
    <div>
      <div className="rowLogin" id="cont">
        <div className="col-signup">
          <h1>Register</h1>
          <SignupForm />
        </div>
        <div className="col-login">
          <h1>Log In</h1>
          <LoginForm />
        </div>
      </div>
      <div className="rowsignup" id="splash">
        <div className="col-signup">
          <div className="welcom1">
            <h1 style={{ color: "yellow" }}>Hello!</h1>
            <h3 style={{ color: "white" }}>How are you doing?</h3>
          </div>
          <div className="welcom2">
            <p id="par">Don't have and account ?</p>
            <button id="btn" className="toggle" onClick={() => toggle()}>
              SignUp
            </button>
          </div>
          <img src={logsplurl} className="lgsp"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
