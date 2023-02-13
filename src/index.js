<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
=======
import "./index.css";
import App from "./App";
import store from "./stores/store";
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import store from "./stores";
>>>>>>> boilerplate
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
<<<<<<< HEAD
  </React.StrictMode>
);
>>>>>>> exercise-redux
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

>>>>>>> edit-json
=======
  </React.StrictMode>,
);
>>>>>>> boilerplate
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> functions
