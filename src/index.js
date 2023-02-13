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
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
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
