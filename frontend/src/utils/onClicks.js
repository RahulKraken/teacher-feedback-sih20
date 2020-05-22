export const newSession = () => {
  const btn = document.getElementById("btn-ns").style;
  btn.top = "0";
  btn.left = "0";
  btn.height = "40rem";
  btn.width = "60rem";
  btn.zIndex = 10;
  document.getElementById("return").style.opacity = "100";
};

export const getReport = () => {
  const btn = document.getElementById("btn-gr").style;
  btn.top = "0";
  btn.left = "0";
  btn.height = "40rem";
  btn.width = "60rem";
  btn.zIndex = 10;
  document.getElementById("return").style.opacity = "100";
};

export const goBack = (modes) => {
  const b = "btnr";
  const bt = document.getElementsByClassName(b);
  console.log(bt);
  for (let i = 0; i <= 1; i++) {
    const btn = bt[i].style;
    btn.top = "";
    btn.left = "";
    btn.height = "";
    btn.width = "";
    btn.zIndex = "";
  }
  document.getElementById("return").style.opacity = "";
};
