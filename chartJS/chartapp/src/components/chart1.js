import React from "react";
import { useDispatch } from "react-redux";

import { Doughnut } from "react-chartjs-2";

import { graphData } from "../redux/actions/graphData";

const ChartApp = () => {
  //   const dispatch = useDispatch();

  //   const showData = () => {
  //     dispatch(graphData);
  //   };
  const data = {
    labels: ["red", "blue", "orange"],
    datasets: [
      {
        data: [200, 50, 100],
        backgroundColor: ["#F53535", "#676767", "#787878"],
      },
    ],
  };
  console.log(data);

  return (
    <>
      <h1>My first doughnut example</h1>
      {/* <Doughnut data={showData} /> */}
      <Doughnut data={data} />
    </>
  );
};

export default ChartApp;
