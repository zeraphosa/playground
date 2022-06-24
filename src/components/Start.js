import React from "react";
import "../css/start.css";

export default function Start() {
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
          <img src="/icons/vscode_32.png" alt="vscpde" />
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
                <li>16:25</li>
                <li>24.06.2022</li>
            </ul>
        </button>
      </div>
    </div>
  );
}
