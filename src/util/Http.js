import axios from "axios";

const baseUrl = "http://localhost:8080";

export const doGet = (url) => {
  axios
    .get(baseUrl + url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doPost = (url, body, onResponse, onError) => {
  axios
    .post(baseUrl + url, body)
    .then((response) => {
      onResponse(response);
    })
    .catch((error) => {
      onError(error);
    });
};
