import React from "react";
import PieChartWithPaddingAngle from "../components/charts/AngelPieChart";
import SimpleAreaChart from "../components/charts/SimpleAreaChart";

const Cari = () => {
  return (
    <>
      <div>
        <div className="border-2 border-white w-auto h-full flex flex-col justify-center md:flex-row ">
          <div className="border border-red-500  ">
            <PieChartWithPaddingAngle />
          </div>
          <div className="border border-orange-500">
            <SimpleAreaChart />
          </div>
          <div className="border border-orange-500">
            <PieChartWithPaddingAngle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cari;
