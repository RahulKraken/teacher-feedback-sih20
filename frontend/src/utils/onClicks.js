export const newSession = (mode) => {
  console.log("click");
  const btn = document.getElementById("btn-ns");
  if (mode == 2) {
    btn.className = "btn-new-session-exp btn-r";
    document.getElementById("return").style.opacity = "100";
  } else {
    btn.animation = "shake 250ms ease-out forwards";
    alert("You must be an Officer to Start a Feedback session");
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

export const getClassReport = (data) => {
  const code = data.get("code");
  console.log(code);
};

export const getSession = (data) => {
  const code = data.get("code");
  console.log(code);
};
