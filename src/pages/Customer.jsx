// Component used to display and search the customer list.
import { useEffect, useState } from "react";
import "../styles/Customer.css";
import SearchBar from "../layouts/Customer/SearchBar";
import Table from "../layouts/Customer/Table";
import { fetchWithToast } from "../utils/fetchWithToast";
import { getCustomers } from "../services/customerServices";

// Customer component
const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchWithToast(() => getCustomers(), {
      loading: "Loading Customers",
      success: "Customers listed successfully",
      error: "Failed to fetch customers",
    }).then((data) => setCustomers(data));
  }, []);

  // Filters customers based on search term
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.iceCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(customer.id).includes(searchTerm)
  );

  return (
    <div className="customer-div">
      {/*Search bar component */}
      <SearchBar onSearch={setSearchTerm} />
      {/* Displays filtered customer data in a table */}
      <Table customers={filteredCustomers} setCustomers={setCustomers} />
    </div>
  );
};

export default Customer;
