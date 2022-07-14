import React from "react";
import "../css/screen.css";
import StartTab from "./StartTab";

export default function Screen({ starttab }) {
  return (
    <div className="screen_container">
      <StartTab starttab={starttab} />
    </div>
  );
}
