import { useEffect, useState } from "react";
import PieChartWithPaddingAngle from "../components/charts/AngelPieChart";
import SimpleAreaChart from "../components/charts/SimpleAreaChart";
import InputCurrent from "../layouts/CurrentAccount/InputCurrent";
import DropdownSearch from "../components/DropdownSearch";
import {
  getClientAccount,
  updateClientAccount,
} from "../services/customerServices";
import { fetchWithToast } from "../utils/fetchWithToast";

const Account = () => {
  const [customerId, setCustomerId] = useState(null);
  const [customerChartData, setCustomerChartData] = useState(null);
  const [chartOpen, setChartOpen] = useState(false);

  useEffect(() => {
    if (customerId !== null) {
      fetchClientAccount(customerId);
    }
  }, [customerId]);

  const fetchClientAccount = async (id) => {
    try {
      const data = await fetchWithToast(() => getClientAccount(id), {
        loading: "Listing account",
        success: "Listing account was completed successfully",
        error: "Listing account failed, notify System Administrator!",
      });
      setCustomerChartData(data.data[0]);
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      await fetchWithToast(
        () => updateClientAccount(customerId, customerChartData),
        {
          loading: "Account updating",
          success: "Account update successfully completed",
          error: "Account update failed, notify System Administrator!",
        }
      ); // önce güncelle
      await fetchClientAccount(customerId); // sonra veriyi yeniden çek
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <>
      <div className="mt-20">
        <div className=" place-items-center ">
          <DropdownSearch
            customerId={setCustomerId}
            setChartOpen={setChartOpen}
          />
        </div>
        {chartOpen && customerChartData && (
          <>
            <div className=" w-auto h-full flex flex-col justify-center md:flex-row  md:gap-52 gap-8 ">
              <div>
                <PieChartWithPaddingAngle
                  customerChartData={customerChartData}
                />
              </div>
              <div className="  text-white ">
                <SimpleAreaChart customerChartData={customerChartData} />
              </div>
            </div>
            <div className=" ">
              <InputCurrent
                customerChartData={customerChartData}
                setCustomerChartData={setCustomerChartData}
                handleSubmit={handleSubmit}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
