import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonSubmit } from "../../components/Button";
import { faker } from "@faker-js/faker";

const Detail = ({ isOpen, onClose, product, formSubmit, delCustomer }) => {
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

  const handleFakeData = () => {
    const randomCaccount = faker.finance.routingNumber();
    console.log(randomCaccount);
    return randomCaccount;
  };

  useEffect(() => {
    setFormData({
      id: product?.id || "",
      companyName: product?.companyName || "",
      address: product?.address || "",
      iceCode: product?.iceCode || "",
      phone: product?.phone || "",
      eMail: product?.eMail || "",
      referencePerson: product?.referencePerson || "",
      currentAccount: product?.currentAccount || "",
      notes: product?.notes || "",
    });
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.currentAccount) {
      const fakerData = faker.finance.routingNumber();

      // Fonksiyonel güncelleme ile state'i ve formSubmit'i aynı anda işle
      setFormData((prevFormData) => {
        console.log(prevFormData);

        const updatedFormData = { ...prevFormData, currentAccount: fakerData };
        console.log("Updated formData:", updatedFormData);
        console.log("Faker data:", fakerData);
        formSubmit(updatedFormData); // Güncel veriyi doğrudan gönder
        return updatedFormData; // State'i güncelle
      });
    } else {
      console.log("Sent to formSubmit:", formData);
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
              {product ? "Edit Product" : "Create New Product"}
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
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Type product name"
                  required
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$2999"
                  required
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="iceCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ICE Code
                </label>
                <input
                  type="text"
                  //   pattern="[0-9]{15}"
                  //   maxLength="15"
                  name="iceCode"
                  id="iceCode"
                  value={formData.iceCode}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$2999"
                  required
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="eMail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mail
                </label>
                <input
                  type="email"
                  maxLength="15"
                  name="eMail"
                  id="eMail"
                  value={formData.eMail}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="referencePerson"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reference Person
                </label>
                <input
                  type="text"
                  maxLength="15"
                  name="referencePerson"
                  id="referencePerson"
                  value={formData.referencePerson}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$2999"
                  required
                />
              </div>
              <div className="col-span-2  ">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  maxLength="15"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$2999"
                  required
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
                  placeholder="Write product description here"
                />
              </div>
            </div>

            <button
              onClick={() => {
                delCustomer(formData.id);
                console.log(formData.id);
              }}
              className="btn bg-dark-quintuple me-6 w-10"
            >
              Sil
            </button>
            <button
              onClick={() => {
                handleFakeData();
              }}
              className="btn bg-dark-quintuple me-6 w-10"
            >
              test
            </button>
            <ButtonSubmit content={"Save"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;
