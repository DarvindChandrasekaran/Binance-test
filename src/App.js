import React from "react";
import "./App.css";
import Linechart from "./Linechart";
import Candlestickchart from "./Candlestickchart";
import Table from "./table";

function App() {
  return (
    <div className="app">
      <Candlestickchart />
      {/* <Table /> */}
      <Linechart />
    </div>
  );
}

export default App;
