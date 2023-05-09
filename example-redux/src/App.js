import { useState } from "react";
import "./style.css";

export default function App() {
  const [changeComponent, setChangeComponent] = useState(true);
  return (
    <div>
      {changeComponent ? (
        <div className="signin">
          <h1>Sign In</h1>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>SIGN IN</button>
          <h2>OR</h2>
          <button onClick={() => setChangeComponent(false)}>SIGN UP NOW</button>
        </div>
      ) : (
        <div className="signin">
          <h1>Sign Up</h1>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button onClick={()=> setChangeComponent(true)}>SIGN UP</button>
          <h2>OR</h2>
          <button onClick={() => setChangeComponent(true)}>SIGN IN NOW</button>
        </div>
      )}
    </div>
  );
}
