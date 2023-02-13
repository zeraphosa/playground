<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

export default function App() {
  return (
    <div>
      {/* no1_no2_no3 --> <Style /> */}
      {/* no5 --> <No5 /> */}
      {/* no6 -->
      const [show, set_show] = useState(false);
       <button onClick={() => set_show(!show)}>
        {show ? "gizle" : "goster"}
      </button>
      {show && <Test />} */}
      {/* no7 --> <Ref /> */}
      {/*
      no8 -->       
      <WithUseState />
      <WithUseReducer /> */}
=======
// import CreateNewJson0 from "./components/CreateNewJson0";
// import CreateNewJson1 from "./components/CreateNewJson1";
// import CreateNewJson2 from "./components/CreateNewJson2";
import CreateNewJson3 from "./components/CreateNewJson3";
export default function App() {
  return (
    <div>
      {/* <CreateNewJson0 /> */}
      {/* <CreateNewJson1 /> */}
      {/* <CreateNewJson2 /> */}
      <CreateNewJson3 />
>>>>>>> edit-json
    </div>
=======
import { BrowserRouter as Router } from "react-router-dom";
import Component from "components/Component";

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Component />
        <Component />
      </div>
      <Component />
    </Router>
>>>>>>> boilerplate
  );
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> functions
