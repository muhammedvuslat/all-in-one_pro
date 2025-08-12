import "../styles/Customer.css";
// import { useState } from "react";

import SearchBar from "../layouts/Customer/SearchBar";
import Table from "../layouts/Customer/Table";
import { fetchWithToast } from "../utils/fetchWithToast";
import { getCustomers } from "../services/customerServices";
import { useEffect, useState } from "react";

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

  const filteredCustomers = customers.filter(
    (c) =>
      c.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.iceCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(c.id).includes(searchTerm)
  );

  return (
    <>
      <div className="customer-div">
        <SearchBar onSearch={setSearchTerm} />
        <Table customers={filteredCustomers} setCustomers={setCustomers} />
      </div>
    </>
  );
};

export default Customer;
