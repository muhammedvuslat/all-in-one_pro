import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Detail from "./Detail";
import { useState } from "react";
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../../services/customerServices";
import { ButtonNewCustomer } from "../../components/Button";
import { fetchWithToast } from "../../utils/fetchWithToast";

const Table = ({ customers, setCustomers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  //! READ Customer

  //! ADD Customer
  const handleAddCustomer = async (newCustomer) => {
    try {
      // fetchWithToast ile createCustomer çağrısı
      const data = await fetchWithToast(() => createCustomer(newCustomer), {
        loading: "Adding customer...",
        success: "Customer added successfully",
        error: "Failed to add customer",
      });

      // API başarılı olursa listeye ekle
      setCustomers((prev) => [...prev, data]);
    } catch (error) {
      // Hata durumunda fetchWithToast zaten toast gösterir
      console.error(error);
    }
  };

  //! Update Customer
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
      setCustomers(customers.map((c) => (c.id === data.id ? data : c)));
    } catch (error) {}
  };

  //! DELETE Customer

  const handleDeleteCustomer = async (id) => {
    try {
      await fetchWithToast(() => deleteCustomer(id), {
        loading: "Deleting client...",
        success: "Client deletion successfully completed",
        error: "Client deletion failed, notify System Administrator!",
      });
      setCustomers(customers.filter((c) => c.id !== id));
      handleCloseModal();
    } catch (error) {}
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
