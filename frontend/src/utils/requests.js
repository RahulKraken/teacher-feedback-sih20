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

export const getQuestions = async () => {
  const options = {
    method: "GET",
    url: "/getQuestionnaire",
    headers: {
      Token: sessionStorage.getItem("token"),
    },
  };
  const res = await axios(options);
  return res.data.questions;
};
