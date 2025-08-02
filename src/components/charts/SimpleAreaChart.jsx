import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const margin = { right: 10, left: 0 };

export default function SimpleAreaChart({ customerChartData }) {
  const { productA, productB, productC, productD } = customerChartData;
  const xLabels = ["ProductA", "ProductB", "ProductC", "ProductD"];
  const uData = [productA, productB, productC, productD];
  const total = uData.reduce((acc, curr) => acc + curr, 0);

  console.log(customerChartData);
  return (
    <div className="flex flex-row  ">
      <div className=" grid content-center">
        <p className="text-3xl ps-1">{total}</p>
      </div>
      <div className="text-center content-center ">
        <h1 className=" font-serif text-xl me-4 mt-2">
          Product-Transaction Volume
        </h1>

        <LineChart
          className=""
          height={150}
          width={220}
          series={[
            {
              data: uData,
              area: true,
              showMark: false,
              color: "url(#Gradient)",
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels, disableTicks: true }]}
          yAxis={[{ disableTicks: true }]}
          sx={{
            // Çizgi (line) gizle
            [`& .${lineElementClasses.root}`]: {
              //   display: "none",
              stroke: "#4254FB",
            },

            // X ve Y eksen çizgileri
            "& .MuiChartsAxis-line": {
              display: "none",
            },
            // Eksen yazı renkleri
            "& .MuiChartsAxis-tickLabel": {
              display: "none",
            },
          }}
          margin={margin}
          grid
        >
          <linearGradient id="Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3f5efb" /> {/* Üst: Doygun Mavi */}
            <stop offset="100%" stopColor="#0f0f2d" />{" "}
            {/* Alt: Koyu Lacivert */}
          </linearGradient>
        </LineChart>
      </div>
    </div>
  );
}
