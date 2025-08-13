// Component used to display and update customer account information.
import { useEffect, useState } from "react";
import PieChartWithPaddingAngle from "../components/charts/AngelPieChart";
import SimpleAreaChart from "../components/charts/SimpleAreaChart";
import InputCurrent from "../layouts/CurrentAccount/InputCurrent";
import DropdownSearch from "../components/DropdownSearch";
import {
  getCustomerAccount,
  updateCustomerAccount,
} from "../services/customerServices";
import { fetchWithToast } from "../utils/fetchWithToast";

// Customer account component
const Account = () => {
  const [customerId, setCustomerId] = useState(null);
  const [customerChartData, setCustomerChartData] = useState(null);
  const [isChartOpen, setIsChartOpen] = useState(false);

  // Fetches account data when customer ID changes
  useEffect(() => {
    if (customerId !== null) {
      fetchClientAccount(customerId);
    }
  }, [customerId]);

  //  Fetches account data for the specified customer ID
  const fetchClientAccount = async (id) => {
    try {
      const data = await fetchWithToast(() => getCustomerAccount(id), {
        loading: "Listing account",
        success: "Listing account was completed successfully",
        error: "Listing account failed, notify System Administrator!",
      });
      setCustomerChartData(data.data[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //  Updates and refreshes account data
  const handleSubmit = async () => {
    try {
      await fetchWithToast(
        () => updateCustomerAccount(customerId, customerChartData),
        {
          loading: "Account updating",
          success: "Account update successfully completed",
          error: "Account update failed, notify System Administrator!",
        }
      );
      await fetchClientAccount(customerId);
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div className="mt-20">
      <div className="place-items-center">
        <DropdownSearch
          customerId={setCustomerId}
          setChartOpen={setIsChartOpen}
        />
      </div>
      {isChartOpen && customerChartData && (
        <>
          <div className="w-auto h-full flex flex-col justify-center md:flex-row md:gap-52 gap-8">
            <div>
              <PieChartWithPaddingAngle customerChartData={customerChartData} />
            </div>
            <div className="text-white">
              <SimpleAreaChart customerChartData={customerChartData} />
            </div>
          </div>
          <div>
            {/* Input form for editing account data */}
            <InputCurrent
              customerChartData={customerChartData}
              setCustomerChartData={setCustomerChartData}
              handleSubmit={handleSubmit}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Account;
