import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Receivables", value: 400 }, // Alacak Tutarı
  { label: "Payables", value: 300 }, // Borç tutarı
  { label: "Notes In", value: 300 }, // Alıncak senet tutarı
  { label: "Notes Out", value: 200 }, // Ödenecek senet tutarı
];

export default function PieChartWithPaddingAngle() {
  return (
    <Stack width="100%" direction="row" flexWrap="wrap">
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            cy: "75%",
            data,
          },
        ]}
        width={200}
        height={150}
        hideLegend
      />
    </Stack>
  );
}
