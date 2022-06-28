// Redux olmadan

export default function Counter({ count }) {
  return <div>{count}</div>;
}


// APP js ici --
// import { useState } from "react";
// import Counter from "./components/Counter";
// import CounterActions from "./components/CounterActions";

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Counter count={count} />
//       <CounterActions count={count} setCount={setCount} />
//     </div>
//   );
// }
