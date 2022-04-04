import React from "react";
import MyAreaChart from "../AreaChart/AreaChart";
import MyLineChart from "../LineChart/LineChart";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <MyLineChart />
      <MyAreaChart />
    </div>
  );
};

export default DashBoard;
