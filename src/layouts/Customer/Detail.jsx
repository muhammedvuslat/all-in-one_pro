import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonSubmit, ButtonDelete } from "../../components/Button";
import { faker } from "@faker-js/faker";

const Detail = ({ isOpen, onClose, customer, formSubmit, delCustomer }) => {
  const inputStyle =
    " text-sm border-x border-b rounded-b-xl  block w-full p-2.5 dark:bg-dark-secondary bg-light-secondary dark:border-dark-tertiary border-light-tertiary dark:placeholder-dark-seventh placeholder:text-dark-seventh dark:text-dark-sixth text-light-sixth";

  const [formData, setFormData] = useState({
    id: "",
    companyName: "",
    address: "",
    iceCode: "",
    phone: "",
    eMail: "",
    referencePerson: "",
    currentAccount: "",
    notes: "",
  });

  useEffect(() => {
    setFormData({
      id: customer?.id || "",
      companyName: customer?.companyName || "",
      address: customer?.address || "",
      iceCode: customer?.iceCode || "",
      phone: customer?.phone || "",
      eMail: customer?.eMail || "",
      referencePerson: customer?.referencePerson || "",
      currentAccount: customer?.currentAccount || "",
      notes: customer?.notes || "",
    });
  }, [customer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.currentAccount) {
      const fakerData = faker.finance.routingNumber();

      // Fonksiyonel güncelleme ile state'i ve formSubmit'i aynı anda işle
      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData, currentAccount: fakerData };
        formSubmit(updatedFormData); // Güncel veriyi doğrudan gönder
        return updatedFormData; // State'i güncelle
      });
    } else {
      formSubmit(formData); // currentAccount varsa mevcut formData'yı gönder
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full "
    >
      <div className="relative p-4 w-full max-w-md max-h-full ">
        <div className="relative  rounded-lg shadow-sm dark:bg-dark-primary bg-light-primary border-2 dark:border-dark-eighth border-light-ninth">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-dark-tertiary border-light-tertiary  ">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {customer ? "Edit Customer" : "Create New Customer"}
            </h3>
            <button
              type="button"
              className=" bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6 text-light-quintuple dark:text-dark-quaternary dark:hover:text-dark-eighth hover:text-light-ninth" />

              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="flex place-content-between text-start  w-full ">
              <div className="border-b  border-light-tertiary dark:border-dark-tertiary ">
                <label
                  htmlFor="name"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID:
                </label>
                <label
                  htmlFor="name"
                  className=" mb-2 ms-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {formData.id}
                </label>
              </div>
              <div className="border-b  border-light-tertiary dark:border-dark-tertiary ">
                <label
                  htmlFor="name"
                  className=" mb-2 text-sm font-medium text-light-sixth dark:text-dark-sixth"
                >
                  C. No:
                </label>
                <label
                  htmlFor="name"
                  className=" mb-2 ms-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {formData.currentAccount}
                </label>
              </div>
            </div>
            <div className="grid gap-2 mb-4 grid-cols-2 ">
              <div className="col-span-2  ">
                <label
                  htmlFor="companyName"
                  className="block mb-2 text-sm font-medium text-light-sixth dark:text-dark-sixth"
                >
                  Company Name*
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Tesla"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please do not leave this field blank."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="555 665 99 99"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please do not leave this field blank."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="iceCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ICE Code*
                </label>
                <input
                  type="text"
                  pattern="[0-9]{9}"
                  name="iceCode"
                  id="iceCode"
                  value={formData.iceCode}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="642887377"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter a 9-digit ICE code."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="eMail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mail*
                </label>
                <input
                  type="email"
                  name="eMail"
                  id="eMail"
                  value={formData.eMail}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="email@mail.com"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please do not leave this field blank."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="referencePerson"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reference Person*
                </label>
                <input
                  type="text"
                  maxLength="15"
                  name="referencePerson"
                  id="referencePerson"
                  value={formData.referencePerson}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="James Blues"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please do not leave this field blank."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address*
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Ankara/Türkiye"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please do not leave this field blank."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="notes"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Description & Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Please write company notes if any"
                />
              </div>
            </div>
            <div className=" flex  gap-2  flex-col items-center ">
              <ButtonSubmit content={"Save"} />
              {customer && (
                <ButtonDelete
                  content={"Delete Customer"}
                  onClick={() => {
                    delCustomer(formData.id);
                  }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;
