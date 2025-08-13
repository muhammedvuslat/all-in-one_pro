// Component that displays customer financial data as a pie chart.
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "../../features/ThemeContext";

// Pie chart component

export default function PieChartWithPaddingAngle({ customerChartData }) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const legendTextColor = isDarkMode ? "#FFFFFF" : "#000000";

  // Structures financial data

  const { receivables, payables, notesRA, notesPA } = customerChartData;

  const chartData = [
    { label: "Receivables", value: receivables },
    { label: "Payables", value: payables },
    { label: "Notes Receivable Amount", value: notesRA },
    { label: "Notes Payable Amount", value: notesPA },
  ];

  return (
    <Stack width="100%" direction="row" flexWrap="wrap">
      <PieChart
        series={[
          {
            data: chartData,
            startAngle: -90,
            endAngle: 90,
            cornerRadius: 8,
            paddingAngle: 2,
            innerRadius: 45,
            outerRadius: 90,
            cy: "75%",
          },
        ]}
        colors={["#007a33", "#F94F58", "#4254FB", "#FAB423"]}
        width={200}
        height={150}
        slotProps={{
          legend: {
            sx: {
              fontSize: 14,
              color: legendTextColor,
            },
          },
        }}
      />
    </Stack>
  );
}
