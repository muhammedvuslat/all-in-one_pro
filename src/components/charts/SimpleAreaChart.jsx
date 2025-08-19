//  Component that displays customer product data as an area chart.
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

//  Chart margins
const margin = { right: 10, left: 0 };

//  Area chart component
export default function SimpleAreaChart({ customerChartData }) {
  const { productA, productB, productC, productD } = customerChartData;
  const xLabels = ["ProductA", "ProductB", "ProductC", "ProductD"];
  const uData = [productA, productB, productC, productD];
  const total = uData.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="flex flex-row text-black dark:text-white">
      <div className="grid content-center">
        {/* Displays the total product volume */}
        <p className="text-3xl ps-1">{total}</p>
      </div>
      <div className="text-center content-center">
        <h1 className="font-serif text-xl me-4 mt-2">
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
            // Customizes the line style
            [`& .${lineElementClasses.root}`]: {
              stroke: "#4254FB",
            },
            //  Hides axis lines
            "& .MuiChartsAxis-line": {
              display: "none",
            },
            // Hides axis labels
            "& .MuiChartsAxis-tickLabel": {
              display: "none",
            },
          }}
          margin={margin}
          grid
        >
          <linearGradient id="Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3f5efb" />
            <stop offset="100%" stopColor="#0f0f2d" />
          </linearGradient>
        </LineChart>
      </div>
    </div>
  );
}
