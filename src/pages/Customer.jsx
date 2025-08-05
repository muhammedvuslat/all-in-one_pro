import "../styles/Customer.css";
// import { useState } from "react";

import SearchBar from "../layouts/Customer/SearchBar";
import Table from "../layouts/Customer/Table";

const Customer = () => {
  return (
    <>
      <div className="customer-div">
        <SearchBar />
        <Table />
      </div>
    </>
  );
};

export default Customer;
