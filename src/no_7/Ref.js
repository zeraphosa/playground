import { useRef } from "react";

// const Input = forwardRef((props, ref) => {
//   return <input ref={ref} type="text" {...props} />;
// });

export default function Ref() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>useRef() - forwardRef()</h1>
      {/* <Input ref={inputRef} /> */}
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </div>
  );
}
