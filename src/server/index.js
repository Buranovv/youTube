import axios from "axios";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 10000,
});

export default request;
