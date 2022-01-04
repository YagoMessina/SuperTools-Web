import axios from "axios";

const baseUrl = "https://localhost:3000";

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
