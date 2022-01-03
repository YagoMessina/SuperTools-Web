import axios from "axios";

const baseUrl = "https://swapi.dev/api";

const doGet = (url) => {
  axios
    .get(baseUrl + url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Http = {
  doGet,
};

export default Http;
