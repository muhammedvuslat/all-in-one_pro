import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function SimpleAreaChart() {
  return (
    <LineChart
      height={200}
      series={[
        { data: uData, area: true, showMark: false, color: "url(#Gradient)" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
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
    >
      <linearGradient id="Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3f5efb" /> {/* Üst: Doygun Mavi */}
        <stop offset="100%" stopColor="#0f0f2d" /> {/* Alt: Koyu Lacivert */}
      </linearGradient>
    </LineChart>
  );
}
