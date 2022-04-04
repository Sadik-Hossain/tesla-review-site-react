import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import getData from "../../hooks/getData";
const MyAreaChart = () => {
  const [data, setData] = getData();
  return (
    <AreaChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default MyAreaChart;
