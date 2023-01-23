import React from "react";
import "./index.css";
import Header from "./components/Header";
import Preview from "./components/Preview";
import CodeBar from "./components/CodeBar";

export default function App() {
  return (
    <>
      <CodeBar />
      <main>
        <Preview />
        <Header />
      </main>
    </>
  );
}
