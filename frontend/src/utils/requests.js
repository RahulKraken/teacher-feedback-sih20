import axios from "axios";

export const fetchReport = async (code) => {
  const options = {
    method: "POST",
    url: "/getReport",
    headers: {
      Token: sessionStorage.getItem("token"),
    },
    data: {
      classId: code,
    },
  };
  try {
    const res = await axios(options);
    return res.data.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
};

export const getQuestion = async () => {
  const options = {
    method: "GET",
    url: "/getQuests",
    headers: {
      Token: sessionStorage.getItem("token"),
    },
  };
  const res = await axios(options);
  console.log("called getqs", res);
  return res.data;
};

export const makeReport = (data, quest, code) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  quest.time_stamp = today;
  let n = 1;
  for (const i in quest.questions) {
    console.log(quest.questions[i]);
    quest.questions[i].ans = {
      id: n,
      text: data.get(n),
    };
    n++;
  }
  quest.classId = code;
  console.log(quest);
  return quest;
};

export const submitReport = async (report) => {
  const options = {
    method: "POST",
    url: "/submitFeedback",
    headers: {
      Token: sessionStorage.getItem("token"),
    },
    data: report,
  };
  try {
    const res = await axios(options);
    console.log(res.status);
    window.location = "/my/dashboard";
  } catch (e) {
    alert(e.response.data);
  }
};
