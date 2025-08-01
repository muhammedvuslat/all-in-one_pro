import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Receivables", value: 400 }, // Alacak Tutarı
  { label: "Payables", value: 300 }, // Borç tutarı
  { label: "Notes Receivable Amount", value: 300 }, // Alıncak senet tutarı
  { label: "Notes Payable Amount", value: 200 }, // Ödenecek senet tutarı
];
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
    <Stack width="100%" direction="row" flexWrap="wrap" className="">
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            cornerRadius: 8,
            paddingAngle: 2,
            innerRadius: 45,
            outerRadius: 80,
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
