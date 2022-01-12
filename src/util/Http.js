import axios from "axios";

import { getJwt } from "./Jwt";

const baseUrl = "http://localhost:8080";

let config = {
  headers: {
    "Auth-Token": getJwt(),
  },
};

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
    .post(baseUrl + url, body, config)
    .then((response) => {
      onResponse(response);
    })
    .catch((error) => {
      onError(error);
    });
};
