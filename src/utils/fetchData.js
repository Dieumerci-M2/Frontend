import axios from "axios";
const URL = "https://join-africa.herokuapp.com/";
export const URL_PREDICTION = "";

export const postAPI = async (url, post) => {
  const res = await axios({
    method: "post",
    url: `${URL_PREDICTION}api/${url}`,
    data: post
    // headers: { Authorization: `Bearer ${token}` }
  });
  return res;
};

export const getAPI = async url => {
  return await axios({
    method: "get",
    url: `${URL}api/${url}`
    // headers: { Authorization: `Bearer ${token}` }
  });
};
