import "../styles/Customer.css";
import { useState } from "react";

import SearchBar from "../layouts/Customer/SearchBar";
import Table from "../layouts/Customer/Table";
import { ButtonSecondary } from "../components/Button";

const Customer = () => {
  // const buttonFeatures2 = {
  //   text: "Add Customer",
  //   rounded: "b-3xl",
  //   styled: "",
  // };

  return (
    <>
      <div className="customer-div">
        <SearchBar />
        {/* <ButtonSecondary props={buttonFeatures2} /> */}
        <Table />
      </div>
    </>
  );
};

export default Customer;
