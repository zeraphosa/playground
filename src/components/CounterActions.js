import { decrement, increment, incrementByAmount } from "../stores/counter";
import { useDispatch } from "react-redux";

export default function CounterAction() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
      <button  onClick={() => dispatch(increment())}>Artir (+)</button>
      <button  onClick={() => dispatch(incrementByAmount(4))}>4 Artir (+)</button>
    </div>
  );
}
