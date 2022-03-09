import React from "react";
import "./App.css";
import Linechart from "./Linechart";
import Candlestickchart from "./Candlestickchart";

function App() {
  return (
    <div className="app">
      <Candlestickchart />
      <Linechart />
    </div>
  );
}

export default App;
