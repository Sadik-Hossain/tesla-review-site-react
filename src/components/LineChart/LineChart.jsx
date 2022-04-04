import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import getData from "../../hooks/getData";
const MyLineChart = () => {
  const [data, setData] = getData();
  return (
    <LineChart width={300} height={350} data={data}>
      <Line
        type="monotone"
        stroke="orange"
        activeDot={{ r: 8 }}
        dataKey="investment"
      />
      <Line dataKey="revenue" type="monotone" stroke="red" />
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default MyLineChart;
