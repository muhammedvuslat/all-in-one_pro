// Configures API clients for customer and account data.
import axios from "axios";

//  API client for customer data
export const customersApi = axios.create({
  baseURL: "https://67decc97471aaaa74285a8fb.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

//  API client for customer account data
export const customersChartApi = axios.create({
  baseURL: "https://67decc97471aaaa74285a8fb.mockapi.io/calisma",
  headers: {
    "Content-Type": "application/json",
  },
});
