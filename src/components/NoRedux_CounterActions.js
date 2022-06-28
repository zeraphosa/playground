// redux olmadan

export default function CounterActions({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count--)}>Azalt (-)</button>
      <button onClick={() => setCount(count++)}>Artir (+)</button>
    </div>
  );
}
