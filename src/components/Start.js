import React from "react";
import "../css/start.css";

export default function Start(){
    return(
        <div className="start_container">
            <div className="start_apps">
                <button><img className="start" src="/icons/start_48.png" alt="start"/></button>
                <button><img src="/icons/Explorer_32.png" alt="file_explorer"/></button>
                <button><img src="/icons/Notepad_32.png" alt="notepad"/></button>
                <button><img src="/icons/Terminal_32.png" alt="file_explorer"/></button>
                <button><img src="/icons/vscode_32.png" alt="file_explorer"/></button>
            </div>
            <div className="start_funcs">
                <button className="func_btn">1</button>
                <button className="func_btn">2</button>
                <button className="func_btn">3</button>
                <button className="func_btn">4</button>
                <button className="func_btn">5</button>
            </div>
        </div>
    )
}