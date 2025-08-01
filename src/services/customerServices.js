import { customersApi, customersChartApi } from "./api";

export const getCustomers = async () => {
  const response = await customersApi.get("/calisma");
  return response.data;
};

export const createCustomer = async (customerData) => {
  const response = await customersApi.post("/calisma", customerData);
  return response.data;
};

export const updateCustomer = async (id, customerData) => {
  const response = await customersApi.put(`/calisma/${id}`, customerData);
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await customersApi.delete(`/calisma/${id}`);
  return response.data;
};

export const getClientAccount = async (id) => {
  const response = await customersChartApi.get(`/${id}/test`);
  return response;
};
