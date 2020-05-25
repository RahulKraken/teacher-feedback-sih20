import axios from "axios";

export async function handleLogin(e) {
  e.preventDefault();
  const data = new FormData(e.target);

  const e_mail = data.get("email");
  const pwd = data.get("pswd");
  const url = "/login";
  const options = {
    method: "POST",
    url: url,
    data: {
      email: e_mail,
      pasword: pwd,
    },
  };
  try {
    const response = await axios(options);
    console.log(response.status);
    const { token, username, is_teacher } = response.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", username);
    sessionStorage.setItem("mode", is_teacher ? 1 : 2);
    // setTimeout(function () {
    //   window.location = "/my/dashboard";
    // }, 1200);
  } catch (e) {
    alert(e.response.data);
  }
}

export async function handleSignup(e) {
  e.preventDefault();
  const data = new FormData(e.target);

  let isTeacher = false;
  let isOfficer = false;
  const name = data.get("name");
  const e_mail = data.get("email");
  const pwd = data.get("pwd");
  if (data.get("options") === 1) {
    isOfficer = true;
  } else isTeacher = true;

  const url = "/signup";
  const options = {
    method: "POST",
    url: url,
    data: {
      user_name: name,
      email: e_mail,
      pasword: pwd,
      is_teacher: isTeacher,
      is_officer: isOfficer,
    },
  };
  try {
    const response = await axios(options);
    console.log(response.data);
    const { token, username, is_teacher } = response.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", username);
    sessionStorage.setItem("mode", is_teacher ? 1 : 2);
    setTimeout(function () {
      window.location = "/my/dashboard";
    }, 1200);
  } catch (e) {
    alert(e.response.data);
  }
}
