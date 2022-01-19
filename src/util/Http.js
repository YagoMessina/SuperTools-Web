import axios from "axios";

import { getJwt } from "./Jwt";

const baseUrl = "http://192.168.0.171:8080";

let config = {
  headers: {
    "Auth-Token": getJwt(),
  },
};

export const doGet = (url, onResponse, onError) => {
  axios
    .get(baseUrl + url, config)
    .then((response) => {
      onResponse(response);
    })
    .catch((error) => {
      onError(error);
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

export const doPut = (url, body, onResponse, onError) => {
  axios
    .put(baseUrl + url, body, config)
    .then((response) => {
      onResponse(response);
    })
    .catch((error) => {
      onError(error);
    });
};
