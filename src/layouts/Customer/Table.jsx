//  Component that displays and manages the customer list in a table format.

import { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Detail from "./Detail";
import { ButtonNewCustomer } from "../../components/Button";
import { fetchWithToast } from "../../utils/fetchWithToast";
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../../services/customerServices";

// Customer table component
const Table = ({ customers, setCustomers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Table column headers
  const customerColumns = [
    "Id",
    "Company Name",
    "Address",
    "ICE Code",
    "Phone",
    "Mail",
    "Reference Person",
    "Current Account No",
    "Detail",
  ];

  // Adds a new customer
  const handleAddCustomer = async (newCustomer) => {
    try {
      const data = await fetchWithToast(() => createCustomer(newCustomer), {
        loading: "Adding customer...",
        success: "Customer added successfully",
        error: "Failed to add customer",
      });
      setCustomers((prev) => [...prev, data]);
    } catch (error) {
      console.error(error, "Customer could not be added");
    }
  };

  // Updates an existing customer
  const handleUpdateCustomer = async (updatedCustomer) => {
    try {
      const data = await fetchWithToast(
        () => updateCustomer(updatedCustomer.id, updatedCustomer),
        {
          loading: "Updating customer...",
          success: "Customer update successfully",
          error: "Customer update failed, notify System Administrator!",
        }
      );
      setCustomers((prev) =>
        prev.map((customer) => (customer.id === data.id ? data : customer))
      );
    } catch (error) {
      console.error(error, "Customer could not be updated");
    }
  };

  // Deletes a customer
  const handleDeleteCustomer = async (id) => {
    try {
      await fetchWithToast(() => deleteCustomer(id), {
        loading: "Deleting client...",
        success: "Client deletion successfully completed",
        error: "Client deletion failed, notify System Administrator!",
      });
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
      handleCloseModal();
    } catch (error) {
      console.error(error, "Customer could not be deleted");
    }
  };

  // Opens the modal window
  const handleOpenModal = (customer = null) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  // Closes the modal window
  const handleCloseModal = () => {
    setSelectedCustomer(null);
    setIsModalOpen(false);
  };

  // Handles form submission
  const handleFormSubmit = async (customerData) => {
    if (customerData.id) {
      await handleUpdateCustomer(customerData);
    } else {
      await handleAddCustomer(customerData);
    }
    handleCloseModal();
  };

  return (
    <>
      {/* New customer button */}
      <div className="flex place-content-center m-6">
        <ButtonNewCustomer
          content={"Add Customer"}
          onClick={() => handleOpenModal()}
        />
      </div>

      <div className="relative overflow-x-auto m-2">
        <table className="w-full text-sm text-left rtl:text-right text-light-sixth dark:text-dark-sixth">
          <thead className="text-xs uppercase border-b border-light-tertiary dark:border-dark-tertiary">
            <tr className="rounded-3xl text-center">
              {customerColumns.map((column, index) => (
                <th scope="col" className="px-10 pb-2" key={index}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                className="justify-center text-center bg-light-secondary dark:bg-dark-secondary border-t dark:border-dark-tertiary border-light-tertiary"
                key={index}
              >
                <th scope="row" className="px-2 font-medium whitespace-nowrap">
                  {customer.id}
                </th>
                <td className="px-2">{customer.companyName}</td>
                <td className="px-2 py-2">{customer.address}</td>
                <td className="px-2">{customer.iceCode}</td>
                <td className="px-2">{customer.phone}</td>
                <td className="px-2">{customer.eMail}</td>
                <td className="px-2">{customer.referencePerson}</td>
                <td className="px-2">{customer.currentAccount}</td>
                <td className="justify-center text-center">
                  <button>
                    <PencilSquareIcon
                      className="h-6 w-6 cursor-pointer"
                      onClick={() => handleOpenModal(customer)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Customer detail modal */}
        <Detail
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          customer={selectedCustomer}
          formSubmit={handleFormSubmit}
          delCustomer={handleDeleteCustomer}
        />
      </div>
    </>
  );
};

export default Table;
