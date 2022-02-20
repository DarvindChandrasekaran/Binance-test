import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./App.css";
import TradeViewChart from "react-crypto-chart";
import LoaderImg from "./Loader.svg";
import DropdownImg from "./down-chevron.png";
import useBinanceData from "./binance-data";

Chart.register(...registerables);

const crypto_list = [
  { id: "BTCBUSD", name: "BTC/BUSD" },
  { id: "ETHBUSD", name: "ETH/BUSD" },
  { id: "SHIBBUSD", name: "SHIB/BUSD" },
  { id: "BNBBUSD", name: "BNB/BUSD" },
  { id: "SLPBUSD", name: "SLP/BUSD" },
  { id: "SOLBUSD", name: "SOL/BUSD" },
  { id: "AVAXBUSD", name: "AVAX/BUSD" },
  { id: "XRPBUSD", name: "XRP/BUSD" },
  { id: "ADABUSD", name: "ADA/BUSD" },
  { id: "NULSBUSD", name: "NULS/BUSD" },
  { id: "CLVBUSD", name: "CLV/BUSD" },
  { id: "MATICBUSD", name: "MATIC/BUSD" },
  { id: "DIABUSD", name: "DIA/BUSD" },
  { id: "BETABUSD", name: "BETA/BUSD" },
  { id: "ANCBUSD", name: "ANC/BUSD" },
  { id: "LUNABUSD", name: "LUNA/BUSD" },
  { id: "KNCBUSD", name: "KNC/BUSD" },
  { id: "JSTBUSD", name: "JST/BUSD" },
  { id: "BNXBUSD", name: "BNX/BUSD" },
  { id: "XVSBUSD", name: "XVS/BUSD" },
];

function App() {
  const [pair, setPair] = useState("BTCBUSD");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [ask, bid, open, low, high, volume, time] = useBinanceData(pair);
  const [price_data, setPriceData] = useState([]);
  const [time_label, setTimeLabel] = useState([]);

  const getName = (id) => crypto_list.find((c) => c.id === id).name;
  const handleInterval = (interval) => {
    setLoading(true);
    setInterval(interval);
  };

  useEffect(() => {
    setPriceData((prev) => [...prev, ask]);
  }, [ask]);

  useEffect(() => {
    setTimeLabel((prev) => [...prev, time]);
  }, [time]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [loading]);

  return (
    <div className="app">
      Ask:{ask} Bid: {bid} Open: {open} Low: {low} High: {high} Volume: {volume}
      {/* DROPDOWN */}
      <div>
        <div
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <img
            src={DropdownImg}
            alt="dropdown button"
            className="dropdown-icon"
          />
        </div>
        <div className="dropdown-box ">
          {crypto_list.map((c) => {
            if (showDropdown) {
              return (
                <div
                  onClick={(e) => {
                    setPair(c.id);
                    setShowDropdown(!showDropdown);
                  }}
                  key={c.id}
                  className="pair-list"
                >
                  {c.name}
                </div>
              );
            }
            return <></>;
          })}
        </div>
      </div>
      <div className="market-chart-title">{getName(pair)}</div>
      <div className="interval-filter">
        <div className="mins" onClick={() => handleInterval("1m")}>
          Min
        </div>
        <div onClick={() => handleInterval("1h")}>Hr</div>
        <div onClick={() => handleInterval("1d")}>Day</div>
        <div onClick={() => handleInterval("1w")}>Week</div>
        <div className="mos" onClick={() => handleInterval("1M")}>
          Month
        </div>
      </div>
      {loading ? (
        <div className="loader">
          <img src={LoaderImg} alt="loading" />
        </div>
      ) : (
        <TradeViewChart
          key={pair + interval}
          interval={interval}
          pair={pair}
          className="chart"
        />
      )}
      <Line
        key={pair + interval + "line"}
        data={{
          labels: time_label,
          datasets: [
            {
              data: price_data,
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        }}
      />
      ;
    </div>
  );
}

export default App;
