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

// export const deleteCustomer = async (id) => {
//   const [customerRes] = await Promise.all([
//     customersApi.delete(`/calisma/${id}`),
//     deleteClientAccount(id),
//   ]);
//   return customerRes.data;
// };

export const getClientAccount = async (id) => {
  const response = await customersChartApi.get(`/${id}/test`);
  return response;
};

export const updateClientAccount = async (id, customerChartData) => {
  const response = await customersChartApi.put(
    `/${id}/test/${id}`,
    customerChartData
  );
  return response.data;
};

export const createClientAccount = async (id, accountData) => {
  const response = await customersChartApi.post(`/${id}/test`, accountData);
  return response.data;
};

export const deleteClientAccount = async (id) => {
  const response = await customersChartApi.delete(`/${id}/test/${id}`);
  return response.data;
};
