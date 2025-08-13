// Contains API service functions for customer and account data.
import { customersApi, customersChartApi } from "./api";

// Fetches all customers
export const getCustomers = async () => {
  const response = await customersApi.get("/calisma");
  return response.data;
};

// Creates a new customer
export const createCustomer = async (customerData) => {
  const response = await customersApi.post("/calisma", customerData);
  return response.data;
};

// Updates an existing customer
export const updateCustomer = async (id, customerData) => {
  const response = await customersApi.put(`/calisma/${id}`, customerData);
  return response.data;
};

// Deletes a customer
export const deleteCustomer = async (id) => {
  const response = await customersApi.delete(`/calisma/${id}`);
  return response.data;
};

// Fetches account data for the specified customer ID
export const getCustomerAccount = async (id) => {
  const response = await customersChartApi.get(`/${id}/test`);
  return response;
};
//  Updates account data for the specified customer ID
export const updateCustomerAccount = async (id, customerChartData) => {
  const response = await customersChartApi.put(
    `/${id}/test/${id}`,
    customerChartData
  );
  return response.data;
};

//  Creates a new account for the specified customer ID
export const createCustomerAccount = async (id, accountData) => {
  const response = await customersChartApi.post(`/${id}/test`, accountData);
  return response.data;
};

// Deletes the account for the specified customer ID
export const deleteCustomerAccount = async (id) => {
  const response = await customersChartApi.delete(`/${id}/test/${id}`);
  return response.data;
};
