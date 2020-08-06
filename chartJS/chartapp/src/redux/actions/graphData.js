import axios from "axios";

import { DATA } from "./actionTypes";

export const graphData = (dispatch) => {
  try {
    const res = axios.get(
      "https://my-json-server.typicode.com/RemanoVictor/API/data"
    );
    dispatch({
      type: DATA,
      payload: res.data,
    });
  } catch (error) {
    console.log("something wrong");
  }
};
