import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Detail from "./Detail";
import { useState, useEffect } from "react";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../../services/customerServices";
import { ButtonNewCustomer } from "../../components/Button";

const Table = () => {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [error, setError] = useState(null);

  //! READ Customer
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        setError("Failed to fetch customers");
      }
    };
    fetchCustomers();
  }, []);

  //! ADD Customer

  const handleAddCustomer = async (newCustomer) => {
    try {
      const data = await createCustomer(newCustomer);
      setCustomers([...customers, data]);
    } catch (error) {
      setError("Failed to add customer");
    }
  };

  //! Update Customer

  const handleUpdateCustomer = async (updatedCustomer) => {
    try {
      const data = await updateCustomer(updatedCustomer.id, updatedCustomer);
      setCustomers(customers.map((c) => (c.id === data.id ? data : c)));
    } catch (error) {
      setError("Failed to update customer");
    }
  };

  //! DELETE Customer

  const handleDeleteCustomer = async (id) => {
    try {
      await deleteCustomer(id);
      setCustomers(customers.filter((c) => c.id !== id));
      handleCloseModal();
      setError(null);
    } catch (error) {
      setError("Failed to delete customer");
    }
  };

  const customerColumn = [
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

  const handleOpenModal = (customer = null) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
    setIsModalOpen(false);
  };

  const handleFormSumbit = async (formData) => {
    if (selectedCustomer) {
      await handleUpdateCustomer({ ...formData, id: selectedCustomer.id });
    } else {
      await handleAddCustomer(formData);
    }
    handleCloseModal();
  };

  return (
    <>
      <div className=" flex place-content-center m-6 ">
        <ButtonNewCustomer
          content={"Add Customer"}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className="relative overflow-x-auto  m-2">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <table className="w-full text-sm text-left rtl:text-right text-light-sixth dark:text-dark-sixth ">
          <thead className="text-xs  uppercase   border-b border-light-tertiary dark:border-dark-tertiary">
            <tr className=" rounded-3xl text-center">
              {customerColumn.map((item, index) => {
                return (
                  <th scope="col" className="px-10 pb-2" key={index}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {customers.map((item, index) => {
              return (
                <tr
                  className="justify-center text-center bg-light-secondary dark:bg-dark-secondary border-t dark:border-dark-tertiary border-light-tertiary 
                "
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-2  font-medium whitespace-nowrap "
                  >
                    {item.id}
                  </th>
                  <td className="px-2  ">{item.companyName}</td>
                  <td className="px-2 py-2 ">{item.address}</td>
                  <td className="px-2  ">{item.iceCode}</td>
                  <td className="px-2 ">{item.phone}</td>
                  <td className="px-2 ">{item.eMail}</td>
                  <td className="px-2 ">{item.referencePerson}</td>
                  <td className="px-2  ">{item.currentAccount}</td>
                  <td className="justify-center text-center ">
                    <button>
                      <PencilSquareIcon
                        className=" h-6 w-6 cursor-pointer  "
                        onClick={() => handleOpenModal(item)}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Detail
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          customer={selectedCustomer}
          formSubmit={handleFormSumbit}
          delCustomer={handleDeleteCustomer}
        />
      </div>
    </>
  );
};

export default Table;
