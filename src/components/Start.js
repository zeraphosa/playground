import React, { useEffect, useState } from "react";
import "../css/start.css";

export default function Start() {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = dd + "." + mm + "." + yyyy;

  const [clock, setClock] = useState();
  useEffect(() => {
    setInterval(() => {
      let dateObj = new Date();
      let hour = dateObj.getHours();
      let minute = dateObj.getMinutes();
      if(hour < 10) hour = "0" + hour;
      if(minute < 10) minute = "0" + minute;
      console.log('minute', minute, typeof(minute));
      let currentTime = hour + ":" + minute;
      setClock(currentTime);
    }, 10000);
  }, []);

  return (
    <div className="start_container">
      <div className="start_apps">
        <button>
          <img className="start" src="/icons/start_48.png" alt="start" />
        </button>
        <button>
          <img src="/icons/explorer_32.png" alt="explorer" />
        </button>
        <button>
          <img src="/icons/notepad_32.png" alt="notepad" />
        </button>
        <button>
          <img src="/icons/vscode_32.png" alt="vscode" />
        </button>
        <button>
          <img src="/icons/terminal_32.png" alt="terminal" />
        </button>
        <button>
          <img src="/icons/spotify_32.png" alt="spotify" />
        </button>
        <button>
          <img src="/icons/chrome_32.png" alt="chrome" />
        </button>
      </div>
      <div className="start_funcs">
        <button>
          <img className="func_icon" src="/icons/arrow_32.png" alt="arrow" />
        </button>
        <button className="func_btn">
          <img className="func_icon" src="/icons/wifi_32.png" alt="wifi" />
          <img className="func_icon" src="/icons/sound_32.png" alt="sound" />
          <img
            className="func_icon"
            src="/icons/battery_32.png"
            alt="battery"
          />
        </button>
        <button className="date_btn">
          <ul>
            <li>{clock}</li>
            <li>{today}</li>
          </ul>
        </button>
      </div>
    </div>
  );
}
