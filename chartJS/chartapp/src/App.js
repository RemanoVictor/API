import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

import ChartApp from "./components/chart1";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ChartApp />
      </div>
    </Provider>
  );
}
