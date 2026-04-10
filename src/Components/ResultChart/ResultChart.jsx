import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Rahim", physics: 85, chemistry: 78, math: 90 },
  { id: 2, name: "Karim", physics: 72, chemistry: 80, math: 76 },
  { id: 3, name: "Ayesha", physics: 91, chemistry: 89, math: 94 },
  { id: 4, name: "Fatima", physics: 88, chemistry: 84, math: 87 },
  { id: 5, name: "sajjad", physics: 70, chemistry: 75, math: 73 },
  { id: 6, name: "rupali", physics: 95, chemistry: 92, math: 96 },
  { id: 7, name: "Nabil", physics: 80, chemistry: 77, math: 82 },
  { id: 8, name: "Mim", physics: 68, chemistry: 70, math: 65 },
  { id: 9, name: "Tariq", physics: 76, chemistry: 79, math: 74 },
  { id: 10, name: "Sonamoni", physics: 89, chemistry: 91, math: 88 },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip ></Tooltip>
      <Line dataKey={"math"}></Line>
      <Line dataKey={'physics'} stroke="red"></Line>

      </LineChart>
    </div>
  );
};

export default ResultChart;
