import React, { useState, useEffect } from "react";

const useBinanceData = () => {
  const [ask, setAsk] = React.useState(0);
  const [bid, setBid] = React.useState(0);
  const [open, setOpen] = React.useState(0);
  const [low, setLow] = React.useState(0);
  const [high, setHigh] = React.useState(0);
  const [close, setClose] = React.useState();
  const [volume, setVolume] = React.useState(0);
  const [percent, setPercent] = React.useState("");
  const [time, setTime] = React.useState();
  const socket = React.useRef(null);
  const [btcusdt, setbtcusdt] = useState({});
  const [ethusdt, setethusdt] = useState({});
  const [shibusdt, setshibusdt] = useState({});
  const [bnbusdt, setbnbusdt] = useState({});
  const [slpusdt, setslpusdt] = useState({});
  const [solusdt, setsolusdt] = useState({});
  const [avaxusdt, setavaxusdt] = useState({});
  const [xrpusdt, setxrpusdt] = useState({});
  const [adausdt, setadausdt] = useState({});
  const [nulusdt, setnulusdt] = useState({});
  const [clvusdt, setclvusdt] = useState({});
  const [maticusdt, setmaticusdt] = useState({});
  const [diausdt, setdiausdt] = useState({});
  const [betausdt, setbetausdt] = useState({});
  const [ancusdt, setancusdt] = useState({});
  const [lunausdt, setlunausdt] = useState({});
  const [kncusdt, setkncusdt] = useState({});
  const [jstusdt, setjstusdt] = useState({});
  const [bnxusdt, setbnxusdt] = useState({});
  const [xvsusdt, setxvsusdt] = useState({});

  let arr = [];
  let ListData = [];

  const [crypto, setCrypto] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    socket.current = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=!miniTicker@arr`
      // `wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/shibusdt@ticker/bnbusdt@ticker/slpusdt@ticker/solusdt@ticker/avaxusdt@ticker/xrpusdt@ticker/adausdt@ticker/nulusdt@ticker/clvusdt@ticker/maticusdt@ticker/diausdt@ticker/betausdt@ticker/ancusdt@ticker/lunausdt@ticker/kncusdt@ticker/jstusdt@ticker/bnxusdt@ticker/xvsusdt@ticker`
    );
    socket.current.onmessage = (msg) => {
      ListData = JSON.parse(msg.data);
      setCoins(ListData.data);
      // console.log(ListData.data);
    };

    // return () => socket.current.close();
  }, [coins]);

  useEffect(() => {
    // console.log(coins[Object.keys(coins)[7]]);
    coins.map((coin) => {
      switch (coin["s"]) {
        case "BTCUSDT":
          setbtcusdt(coin);
          const closePriceBTC = btcusdt["c"];
          // console.log(Object.keys());
          break;
        // case "ETHUSDT":
        //   setethusdt(coin);
        //   const closePriceETH = ethusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "SHIBUSDT":
        //   setshibusdt(coin);
        //   const closePriceSHIB = shibusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "BNBUSDT":
        //   setbnbusdt(coin);
        //   const closePriceBNB = bnbusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "SLPUSDT":
        //   setslpusdt(coin);
        //   const closePriceSLP = slpusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "SOLUSDT":
        //   setsolusdt(coin);
        //   const closePriceSOL = solusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "AVAXUSDT":
        //   setavaxusdt(coin);
        //   const closePriceAVAX = avaxusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "XRPUSDT":
        //   setxrpusdt(coin);
        //   const closePriceXRP = xrpusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "adausdt":
        //   setadausdt(coin);
        //   const closePriceADA = adausdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "NULUSDT":
        //   setnulusdt(coin);
        //   const closePriceNUL = nulusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "CLVUSDT":
        //   setclvusdt(coin);
        //   const closePriceCLV = clvusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "MATICUSDT":
        //   setmaticusdt(coin);
        //   const closePriceMATIC = maticusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "DIAUSDT":
        //   setdiausdt(coin);
        //   const closePriceDIA = diausdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "BETAUSDT":
        //   setbetausdt(coin);
        //   const closePriceBETA = betausdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "ANCUSDT":
        //   setancusdt(coin);
        //   const closePriceANC = ancusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "LUNAUSDT":
        //   setlunausdt(coin);
        //   const closePriceLUNA = lunausdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "KNCUSDT":
        //   setkncusdt(coin);
        //   const closePriceKNC = kncusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "JSTUSDT":
        //   setjstusdt(coin);
        //   const closePriceJST = jstusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "BNXUSDT":
        //   setbnxusdt(coin);
        //   const closePriceBNX = bnxusdt["c"];
        //   console.log(Object.keys());
        //   break;
        // case "XVSUSDT":
        //   setxvsusdt(coin);
        //   const closePriceXSV = xvsusdt["c"];
        //   console.log(Object.keys());
        //   break;
        default:
          break;
      }
    });
  }, [coins]);

  return [ask, bid, open, low, high, close, volume, percent, time, arr];
};

export default useBinanceData;
