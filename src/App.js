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
  );
}
