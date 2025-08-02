import React, { useEffect, useState } from "react";
import PieChartWithPaddingAngle from "../components/charts/AngelPieChart";
import SimpleAreaChart from "../components/charts/SimpleAreaChart";
import InputCurrent from "../layouts/CurrentAccount/InputCurrent";
import DropdownSearch from "../components/DropdownSearch";
import {
  getClientAccount,
  updateClientAccount,
} from "../services/customerServices";

const Cari = () => {
  const [customerId, setCustomerId] = useState(null);
  const [customerChartData, setCustomerChartData] = useState(null);
  const [chartOpen, setChartOpen] = useState(false);
  const fetchClientAccount = async (id) => {
    try {
      const data = await getClientAccount(id);
      setCustomerChartData(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (customerId !== null) {
      fetchClientAccount(customerId);
    }
  }, [customerId]);

  const handleSubmit = async () => {
    console.log(customerChartData);
    console.log(customerId);
    try {
      await updateClientAccount(customerId, customerChartData); // önce güncelle
      await fetchClientAccount(customerId); // sonra veriyi yeniden çek
      console.log("Güncelleme ve veri çekme işlemi tamamlandı");
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

export default Cari;
