// import Style from "./no1_no2_no3/Style";
// import No5 from "./no_5/No5";
import { useState } from "react";
import Test from "./no_6/Test";

export default function App() {
  const [show, set_show] = useState(false);
  return (
    <div>
      {/* <h2>*************************************************************</h2> */}
      {/* <Style /> */}
      {/* <No5 /> */}
      <button onClick={() => set_show(!show)}>
        {show ? "gizle" : "goster"}
      </button>
      {show && <Test />}
    </div>
  );
}
