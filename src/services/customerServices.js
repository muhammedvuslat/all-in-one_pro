import api from "./api";

export const getCustomers = async () => {
  const response = await api.get("/calisma");
  return response.data;
};

export const createCustomer = async (customerData) => {
  const response = await api.post("/calisma", customerData);
  return response.data;
};

export const updateCustomer = async (id, customerData) => {
  const response = await api.put(`/calisma/${id}`, customerData);
  return response.data;
};

export const deleteCustomer = async (id) => {
  console.log(id);
  const response = await api.delete(`/calisma/${id}`);
  console.log(response);
  console.log(response.data);
  return response.data;
};
