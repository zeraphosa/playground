import React, { useState } from "react";

export default function App() {
  const [leftElement, setLeftElement] = useState(false);
  const [rightElement, setRightElement] = useState(false);

  function handleMouseMove(event) {
    const { clientX } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    if (clientX >= rect.left && clientX <= rect.left + halfWidth) {
      setLeftElement(true);
      setRightElement(false);
    } else if (clientX > rect.left + halfWidth && clientX <= rect.right) {
      setLeftElement(false);
      setRightElement(true);
    } else {
      setLeftElement(false);
      setRightElement(false);
    }
  }

  function handleMouseLeave() {
    setLeftElement(false);
    setRightElement(false);
  }

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          height: "100px",
          backgroundColor: leftElement ? "red" : "blue",
        }}
      />
      <div
        style={{
          width: "50%",
          height: "100px",
          backgroundColor: rightElement ? "red" : "blue",
        }}
      />
    </div>
  );
}
