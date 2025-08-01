import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const InputCurrent = () => {
  const product = false;
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
  const inputStyle =
    " text-sm border-x border-b rounded-b-xl  p-2.5 dark:bg-dark-secondary bg-light-secondary border-light-quintuple dark:border-dark-quaternary dark:placeholder-dark-seventh placeholder:text-dark-seventh dark:text-dark-sixth text-light-sixth ";

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("test");
  };

  const handleChange = (e) => {
    console.log("test");
  };

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className=" top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  "
    >
      <div className="relative p-4 w-full max-w max-h-full ">
        <div className="relative   rounded-[16px]  border border-light-quintuple dark:border-dark-quaternary  ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-dark-quaternary border-light-quintuple  ">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Product
            </h3>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-2 mb-4 grid-cols-1 ">
              <div className="mt-4 md:flex md:flex-row place-content-center gap-20">
                <label
                  htmlFor="companyName"
                  className="block mb-2  text-sm font-medium text-light-sixth dark:text-dark-sixth  content-center items-start   w-32"
                >
                  Receivables
                </label>
                <input
                  type="number"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                />
              </div>
              <div className="mt-4 md:flex md:flex-row place-content-center gap-20">
                <label
                  htmlFor="companyName"
                  className="block mb-2  text-sm font-medium text-light-sixth dark:text-dark-sixth  content-center  items-start   w-32 "
                >
                  Payables
                </label>
                <input
                  type="number"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                />
              </div>
              <div className="mt-4 md:flex md:flex-row place-content-center gap-20">
                <label
                  htmlFor="companyName"
                  className="block mb-2  text-sm font-medium text-light-sixth dark:text-dark-sixth  content-center items-start   w-32"
                >
                  Notes Receivable Amount
                </label>
                <input
                  type="number"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                />
              </div>
              <div className="mt-4 md:flex md:flex-row place-content-center gap-20">
                <label
                  htmlFor="companyName"
                  className="block mb-2  text-sm font-medium text-light-sixth dark:text-dark-sixth  content-center items-start   w-32"
                >
                  Notes Payable Amount
                </label>
                <input
                  type="number"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                />
              </div>
            </div>

            <button className="btn bg-dark-quintuple me-6 w-10">Sil</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputCurrent;
