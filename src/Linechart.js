import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./App.css";
import useBinanceData from "./binance-data";
import annotationPlugin from "chartjs-plugin-annotation";
Chart.register(...registerables, annotationPlugin);

function App() {
  const [pair, setPair] = useState("BTCUSDT");
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [ask, bid, open, low, high, close, volume, percent, time] =
    useBinanceData(pair);

  const [price_data, setPriceData] = useState([]);
  const [time_label, setTimeLabel] = useState([]);
  console.log(close);

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
              position: "left",
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

  return (
    //Market chart
    <div className="app">
      {/* Line Chart */}
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
      </div>
    </div>
  );
}

export default App;
