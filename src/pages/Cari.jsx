import React, { useEffect, useState } from "react";
import PieChartWithPaddingAngle from "../components/charts/AngelPieChart";
import SimpleAreaChart from "../components/charts/SimpleAreaChart";
import InputCurrent from "../layouts/CurrentAccount/InputCurrent";
import DropdownSearch from "../components/DropdownSearch";
import { getClientAccount } from "../services/customerServices";

const Cari = () => {
  const [customerId, setCustomerId] = useState(null);
  const [customerChartData, setCustomerChartData] = useState(null);
  const [chartOpen, setChartOpen] = useState(false);

  useEffect(() => {
    const fetchClientAccount = async (id) => {
      try {
        const data = await getClientAccount(id);
        setCustomerChartData(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    if (customerId !== null) {
      fetchClientAccount(customerId);
    }
  }, [customerId]);

  return (
    <>
      <div className="mt-20  border border-red-600 ">
        <div className="border place-items-center border-green-500">
          <DropdownSearch
            customerId={setCustomerId}
            setChartOpen={setChartOpen}
          />
        </div>
        {chartOpen && (
          <>
            <div className=" w-auto h-full flex flex-col justify-center md:flex-row gap-52 ">
              <div className=" bg-[rgba(174,171,171,0.31)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.2px] border border-light-quintuple dark:border-dark-quaternary ">
                {customerChartData && (
                  <PieChartWithPaddingAngle
                    customerChartData={customerChartData}
                  />
                )}
              </div>
              <div className="  text-white ">
                {customerChartData && (
                  <SimpleAreaChart customerChartData={customerChartData} />
                )}
              </div>
            </div>
            <div className=" ">
              <InputCurrent />
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Cari;
