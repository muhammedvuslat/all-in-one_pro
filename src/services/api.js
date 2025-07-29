import axios from "axios";

const api = axios.create({
  baseURL: "https://67decc97471aaaa74285a8fb.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
