import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, Tooltip } from "chart.js";
import "./App.css";
import TradeViewChart from "react-crypto-chart";
import LoaderImg from "./Loader.svg";
import DropdownImg from "./down-chevron.png";
import useBinanceData from "./binance-data";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(...registerables, annotationPlugin);

const crypto_list = [
  { id: "BTCUSDT", name: "BTC/USDT" },
  { id: "ETHUSDT", name: "ETH/USDT" },
  { id: "SHIBUSDT", name: "SHIB/USDT" },
  { id: "BNBUSDT", name: "BNB/USDT" },
  { id: "SLPUSDT", name: "SLP/USDT" },
  { id: "SOLUSDT", name: "SOL/USDT" },
  { id: "AVAXUSDT", name: "AVAX/USDT" },
  { id: "XRPUSDT", name: "XRP/USDT" },
  { id: "ADAUSDT", name: "ADA/USDT" },
  { id: "NULSUSDT", name: "NULS/USDT" },
  { id: "CLVUSDT", name: "CLV/USDT" },
  { id: "MATICUSDT", name: "MATIC/USDT" },
  { id: "DIAUSDT", name: "DIA/USDT" },
  { id: "BETAUSDT", name: "BETA/USDT" },
  { id: "ANCUSDT", name: "ANC/USDT" },
  { id: "LUNAUSDT", name: "LUNA/USDT" },
  { id: "KNCUSDT", name: "KNC/USDT" },
  { id: "JSTUSDT", name: "JST/USDT" },
  { id: "BNXUSDT", name: "BNX/USDT" },
  { id: "XVSUSDT", name: "XVS/USDT" },
];

function App() {
  const [pair, setPair] = useState("BTCUSDT", "");

  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [ask, bid, open, low, high, close, volume, time, percent] =
    useBinanceData(pair);
  const [price_data, setPriceData] = useState([]);
  const [time_label, setTimeLabel] = useState([]);

  const getName = (id) => crypto_list.find((c) => c.id === id).name;

  const handleInterval = (interval) => {
    setLoading(true);
    setInterval(interval);
  };

  const options = {
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: close,
            yMax: close,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            label: {
              content: close,
              enabled: true,
              position: "right",
            },
          },
        },
      },
      responsive: true,
      scales: {
        y: {
          min: () => {
            Math.min(price_data);
          },
          max: () => {
            Math.max(price_data);
          },
        },
      },
    },
  };

  useEffect(() => {
    if (close) {
      setPriceData((prev) => [...prev, close]);
    }
  }, [close]);

  useEffect(() => {
    if (time) {
      const date = new Date(time);
      const t = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const newdate = `${t} ${month}/${day}`;
      setTimeLabel((prev) => [...prev, newdate]);
    }
  }, [time]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [loading]);

  return (
    <div className="app">
      Ask: {parseFloat(ask).toFixed(2)} Bid: {parseFloat(bid).toFixed(2)} Open:
      {parseFloat(open).toFixed(2)} Low: {parseFloat(low).toFixed(2)} High:
      {parseFloat(high).toFixed(2)} Close: {parseFloat(close).toFixed(2)}
      Volume: {parseFloat(volume).toFixed(2)}
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
                  <tr>
                    <td className="coinList">{c.name}</td>
                    <td className="coinList">{parseFloat(close).toFixed(2)}</td>
                    <td className="coinList">
                      {parseFloat(percent).toFixed(2) < 0 ? (
                        <p className="coin-percent red">
                          {parseFloat(percent).toFixed(2)}%
                        </p>
                      ) : (
                        <p className="coin-percent green">
                          {parseFloat(percent).toFixed(2)}%
                        </p>
                      )}
                    </td>
                  </tr>
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
          pair={pair}
          interval={interval}
          className="chart"
          // chartLayout={{
          //   layout: {
          //     backgroundColor: "#ffffff",
          //     textColor: "#c4c4c4",
          //   },
          //   grid: {
          //     vertLines: {
          //       color: "#c4c4c4",
          //     },
          //     horzLines: {
          //       color: "#c4c4c4",
          //     },
          //   },
          //   priceScale: {
          //     borderColor: "#c4c4c4",
          //   },
          //   timeScale: {
          //     borderColor: "#c4c4c4",
          //     timeVisible: true,
          //     secondsVisible: false,
          //   },
          // }}
        />
      )}
      <div className="db-chart">
        <Line
          key={pair + interval + pair}
          data={{
            labels: time_label,
            datasets: [
              {
                data: price_data,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.1)",
                borderColor: "rgba(75,192,192,1)",
                pointRadius: 0.5,
              },
            ],
          }}
          options={options}
        />
        <button className="buy-btn">BUY</button>
      </div>
    </div>
  );
}

export default App;
