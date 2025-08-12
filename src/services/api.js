import axios from "axios";

export const customersApi = axios.create({
  baseURL: "https://67decc97471aaaa74285a8fb.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export const customersChartApi = axios.create({
  baseURL: "https://67decc97471aaaa74285a8fb.mockapi.io/calisma",
  headers: {
    "Content-Type": "application/json",
  },
});
