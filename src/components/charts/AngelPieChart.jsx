import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const whiteColor = "#FFFF";
export default function PieChartWithPaddingAngle({ customerChartData }) {
  const { receivables, payables, notesRA, notesPA } = customerChartData;
  const data = [
    { label: "Receivables", value: receivables }, // Alacak Tutarı
    { label: "Payables", value: payables }, // Borç tutarı
    { label: "Notes Receivable Amount", value: notesRA }, // Alıncak senet tutarı
    { label: "Notes Payable Amount", value: notesPA }, // Ödenecek senet tutarı
  ];
  return (
    <Stack width="100%" direction="row" flexWrap="wrap">
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            cornerRadius: 8,
            paddingAngle: 2,
            innerRadius: 45,
            cy: "75%",
            data,
            outerRadius: 90,
          },
        ]}
        colors={["#007a33", "#F94F58", "#4254FB", "#FAB423"]} // Use palette
        width={200}
        height={150}
        slotProps={{
          legend: {
            sx: {
              fontSize: 14,
              color: whiteColor,
            },
          },
        }}
      />
    </Stack>
  );
}
