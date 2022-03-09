import React, { useState } from "react";
import Row from "./row";
import "./App.css";

const Table = (props) => {
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
  const [setPair] = useState("BTCUSDT");
  //   const [ask, bid, open, low, high, close, volume, time, percent, lineChart] =
  //     useBinanceData(pair);

  //   const BtcPercentage = parseFloat(
  //     useBinanceData(crypto_list[0].id)[8]
  //   ).toFixed(2);

  //   const EthPercentage = parseFloat(
  //     useBinanceData(crypto_list[1].id)[8]
  //   ).toFixed(2);

  //   const ShibPercentage = parseFloat(
  //     useBinanceData(crypto_list[2].id)[8]
  //   ).toFixed(2);

  //   const BnbPercentage = parseFloat(
  //     useBinanceData(crypto_list[3].id)[8]
  //   ).toFixed(2);

  //   const SlpPercentage = parseFloat(
  //     useBinanceData(crypto_list[4].id)[8]
  //   ).toFixed(2);

  //   const SolPercentage = parseFloat(
  //     useBinanceData(crypto_list[5].id)[8]
  //   ).toFixed(2);

  //   const AvaxPercentage = parseFloat(
  //     useBinanceData(crypto_list[6].id)[8]
  //   ).toFixed(2);

  //   const XrpPercentage = parseFloat(
  //     useBinanceData(crypto_list[7].id)[8]
  //   ).toFixed(2);

  //   const AdaPercentage = parseFloat(
  //     useBinanceData(crypto_list[8].id)[8]
  //   ).toFixed(2);

  //   const NulPercentage = parseFloat(
  //     useBinanceData(crypto_list[9].id)[8]
  //   ).toFixed(2);

  //   const ClvPercentage = parseFloat(
  //     useBinanceData(crypto_list[10].id)[8]
  //   ).toFixed(2);

  //   const MaticPercentage = parseFloat(
  //     useBinanceData(crypto_list[11].id)[8]
  //   ).toFixed(2);

  //   const DiaPercentage = parseFloat(
  //     useBinanceData(crypto_list[12].id)[8]
  //   ).toFixed(2);

  //   const BetaPercentage = parseFloat(
  //     useBinanceData(crypto_list[13].id)[8]
  //   ).toFixed(2);

  //   const AncPercentage = parseFloat(
  //     useBinanceData(crypto_list[14].id)[8]
  //   ).toFixed(2);

  //   const LunaPercentage = parseFloat(
  //     useBinanceData(crypto_list[15].id)[8]
  //   ).toFixed(2);

  //   const KncPercentage = parseFloat(
  //     useBinanceData(crypto_list[16].id)[8]
  //   ).toFixed(2);

  //   const JstPercentage = parseFloat(
  //     useBinanceData(crypto_list[17].id)[8]
  //   ).toFixed(2);

  //   const BnxPercentage = parseFloat(
  //     useBinanceData(crypto_list[18].id)[8]
  //   ).toFixed(2);

  //   const XvsPercentage = parseFloat(
  //     useBinanceData(crypto_list[19].id)[8]
  //   ).toFixed(2);

  return (
    <div>
      <table className="list-table">
        <tbody className="list-tbody">
          {/* <tr onClick={() => setPair("BTCUSDT")} className="list-row">
            <td>BTC/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[0].id)[5]).toFixed(2)}
            </td>
            <td>
              {BtcPercentage < 0 ? (
                <p className="coin-percent red">{BtcPercentage} %</p>
              ) : (
                <p className="coin-percent green">{BtcPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("ETHUSDT")} className="list-row">
            <td>ETH/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[1].id)[5]).toFixed(2)}
            </td>
            <td>
              {EthPercentage < 0 ? (
                <p className="coin-percent red">{EthPercentage} %</p>
              ) : (
                <p className="coin-percent green">{EthPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("SHIBUSDT")} className="list-row">
            <td>SHIB/USDT</td>
            <td>{parseFloat(useBinanceData(crypto_list[2].id)[5])}</td>
            <td>
              {ShibPercentage < 0 ? (
                <p className="coin-percent red">{ShibPercentage} %</p>
              ) : (
                <p className="coin-percent green">{ShibPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("BNBUSDT")} className="list-row">
            <td>BNB/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[3].id)[5]).toFixed(2)}
            </td>
            <td>
              {BnbPercentage < 0 ? (
                <p className="coin-percent red">{BnbPercentage} %</p>
              ) : (
                <p className="coin-percent green">{BnbPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("SLPUSDT")} className="list-row">
            <td>SLP/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[4].id)[5]).toFixed(2)}
            </td>
            <td>
              {SlpPercentage < 0 ? (
                <p className="coin-percent red">{SlpPercentage} %</p>
              ) : (
                <p className="coin-percent green">{SlpPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("SOLUSDT")} className="list-row">
            <td>SOL/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[5].id)[5]).toFixed(2)}
            </td>
            <td>
              {SolPercentage < 0 ? (
                <p className="coin-percent red">{SolPercentage} %</p>
              ) : (
                <p className="coin-percent green">{SolPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("AVAXUSDT")} className="list-row">
            <td>AVAX/USDT</td>
            <td>{parseFloat(useBinanceData(crypto_list[6].id)[5])}</td>
            <td>
              {AvaxPercentage < 0 ? (
                <p className="coin-percent red">{AvaxPercentage} %</p>
              ) : (
                <p className="coin-percent green">{AvaxPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("XRPUSDT")} className="list-row">
            <td>XRP/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[7].id)[5]).toFixed(2)}
            </td>
            <td>
              {XrpPercentage < 0 ? (
                <p className="coin-percent red">{XrpPercentage} %</p>
              ) : (
                <p className="coin-percent green">{XrpPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("ADAUSDT")} className="list-row">
            <td>ADA/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[8].id)[5]).toFixed(2)}
            </td>
            <td>
              {AdaPercentage < 0 ? (
                <p className="coin-percent red">{AdaPercentage} %</p>
              ) : (
                <p className="coin-percent green">{AdaPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("NULUSDT")} className="list-row">
            <td>NUL/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[9].id)[5]).toFixed(2)}
            </td>
            <td>
              {NulPercentage < 0 ? (
                <p className="coin-percent red">{NulPercentage} %</p>
              ) : (
                <p className="coin-percent green">{NulPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("CLVUSDT")} className="list-row">
            <td>CLV/USDT</td>
            <td>{parseFloat(useBinanceData(crypto_list[10].id)[5])}</td>
            <td>
              {ClvPercentage < 0 ? (
                <p className="coin-percent red">{ClvPercentage} %</p>
              ) : (
                <p className="coin-percent green">{ClvPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("MATICUSDT")} className="list-row">
            <td>MATIC/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[11].id)[5]).toFixed(2)}
            </td>
            <td>
              {MaticPercentage < 0 ? (
                <p className="coin-percent red">{MaticPercentage} %</p>
              ) : (
                <p className="coin-percent green">{MaticPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("DIAUSDT")} className="list-row">
            <td>DIA/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[12].id)[5]).toFixed(2)}
            </td>
            <td>
              {DiaPercentage < 0 ? (
                <p className="coin-percent red">{DiaPercentage} %</p>
              ) : (
                <p className="coin-percent green">{DiaPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("BETAUSDT")} className="list-row">
            <td>BETA/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[13].id)[5]).toFixed(2)}
            </td>
            <td>
              {BetaPercentage < 0 ? (
                <p className="coin-percent red">{BetaPercentage} %</p>
              ) : (
                <p className="coin-percent green">{BetaPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("ANCUSDT")} className="list-row">
            <td>ANC/USDT</td>
            <td>{parseFloat(useBinanceData(crypto_list[14].id)[5])}</td>
            <td>
              {AncPercentage < 0 ? (
                <p className="coin-percent red">{AncPercentage} %</p>
              ) : (
                <p className="coin-percent green">{AncPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("LUNAUSDT")} className="list-row">
            <td>LUNA/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[15].id)[5]).toFixed(2)}
            </td>
            <td>
              {LunaPercentage < 0 ? (
                <p className="coin-percent red">{LunaPercentage} %</p>
              ) : (
                <p className="coin-percent green">{LunaPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("KNCUSDT")} className="list-row">
            <td>KNC/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[16].id)[5]).toFixed(2)}
            </td>
            <td>
              {KncPercentage < 0 ? (
                <p className="coin-percent red">{KncPercentage} %</p>
              ) : (
                <p className="coin-percent green">{KncPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("JSTUSDT")} className="list-row">
            <td>JST/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[17].id)[5]).toFixed(2)}
            </td>
            <td>
              {JstPercentage < 0 ? (
                <p className="coin-percent red">{JstPercentage} %</p>
              ) : (
                <p className="coin-percent green">{JstPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("BNXUSDT")} className="list-row">
            <td>BNX/USDT</td>
            <td>{parseFloat(useBinanceData(crypto_list[18].id)[5])}</td>
            <td>
              {BnxPercentage < 0 ? (
                <p className="coin-percent red">{BnxPercentage} %</p>
              ) : (
                <p className="coin-percent green">{BnxPercentage}%</p>
              )}
            </td>
          </tr>
          <tr onClick={() => setPair("XVSUSDT")} className="list-row">
            <td>XVS/USDT</td>
            <td>
              {parseFloat(useBinanceData(crypto_list[19].id)[5]).toFixed(2)}
            </td>
            <td>
              {XvsPercentage < 0 ? (
                <p className="coin-percent red">{XvsPercentage} %</p>
              ) : (
                <p className="coin-percent green">{XvsPercentage}%</p>
              )}
            </td>
          </tr> */}
          {/* {crypto_list.map((c) => {
            return <Row key={c.id} pair={c.id} name={c.name} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
