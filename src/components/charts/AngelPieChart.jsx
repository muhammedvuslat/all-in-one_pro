import React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "../../features/ThemeContext";

// PieChart bileşeni: Müşteri verilerini temaya göre gösteren pasta grafik.
export default function PieChartWithPaddingAngle({ customerChartData }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const legendTextColor = isDark ? "#FFFFFF" : "#000000"; // Daha açık okunabilirlik için tam beyaz (#FFFF → #FFFFFF)

  // Destructuring ile veri modelini okunabilir hale getiriyoruz
  const { receivables, payables, notesRA, notesPA } = customerChartData;

  // Grafik verilerini sabit bir dizi olarak tanımlıyoruz
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
        colors={["#007a33", "#F94F58", "#4254FB", "#FAB423"]} // Kurumsal renk paleti tanımlı
        width={200}
        height={150}
        slotProps={{
          legend: {
            sx: {
              fontSize: 14,
              color: legendTextColor, // Tema bağımlı yazı rengi
            },
          },
        }}
      />
    </Stack>
  );
}
