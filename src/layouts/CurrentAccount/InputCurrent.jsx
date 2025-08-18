//  Form component used to edit customer account data.
import { ButtonSubmit } from "../../components/Button";

//  Account editing form component
const InputCurrent = ({
  customerChartData,
  handleSubmit,
  setCustomerChartData,
}) => {
  const inputStyle =
    "text-sm border-x border-b rounded-b-xl p-2.5 dark:bg-dark-secondary bg-light-secondary border-light-quintuple dark:border-dark-quaternary dark:placeholder-dark-seventh placeholder:text-dark-seventh dark:text-dark-sixth text-light-sixth";

  // Updates form input values
  const handleChange = (e) => {
    setCustomerChartData({
      ...customerChartData,
      [e.target.name]: Number(e.target.value),
    });
  };

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w max-h-full">
        <div className="relative rounded-[16px] border border-light-quintuple dark:border-dark-quaternary">
          <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-dark-quaternary border-light-quintuple">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Current Account
            </p>
          </div>
          <form
            className="p-4 md:p-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="grid gap-2 mb-10 grid-cols-1">
              <div className="mt-4 md:flex md:flex-row place-content-center gap-10">
                <label
                  htmlFor="receivables"
                  className="block mb-2 text-sm font-medium text-light-sixth dark:text-dark-sixth content-center items-start w-32"
                >
                  Receivables
                </label>
                <input
                  type="number"
                  name="receivables"
                  id="receivables"
                  value={customerChartData?.receivables || ""}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                  min={0}
                />
              </div>
              <div className="mt-4 md:flex md:flex-row place-content-center gap-10">
                <label
                  htmlFor="payables"
                  className="block mb-2 text-sm font-medium text-light-sixth dark:text-dark-sixth content-center items-start w-32"
                >
                  Payables
                </label>
                <input
                  type="number"
                  name="payables"
                  id="payables"
                  value={customerChartData?.payables || ""}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                  min={0}
                />
              </div>
              <div className="mt-4 md:flex md:flex-row place-content-center gap-10">
                <label
                  htmlFor="notesRA"
                  className="block mb-2 text-sm font-medium text-light-sixth dark:text-dark-sixth content-center items-start w-32"
                >
                  Notes Receivable Amount
                </label>
                <input
                  type="number"
                  name="notesRA"
                  id="notesRA"
                  value={customerChartData?.notesRA || ""}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                  min={0}
                />
              </div>
              <div className="mt-4 md:flex md:flex-row place-content-center gap-10">
                <label
                  htmlFor="notesPA"
                  className="block mb-2 text-sm font-medium text-light-sixth dark:text-dark-sixth content-center items-start w-32"
                >
                  Notes Payable Amount
                </label>
                <input
                  type="number"
                  name="notesPA"
                  id="notesPA"
                  value={customerChartData?.notesPA || ""}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="$ Enter amount"
                  min={0}
                />
              </div>
            </div>
            <ButtonSubmit content={"Save"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputCurrent;
