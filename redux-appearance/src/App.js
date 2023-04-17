import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";

export default function App() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("azn");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  return (
    <div className="app">
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <div>
        <h3>From</h3>
        <Dropdown options={options} onChange={(e) => setFrom(e.value)} value={from} placeholder="FROM" />
      </div>
      <div>
        <h3>TO</h3>
        <Dropdown options={options} onChange={(e) => setTo(e.value)} value={to} placeholder="TO" />
      </div>

      <div className="result">
        <button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>
        <h2>Converted Amount:</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
      </div>

    </div>
  );
}
