import { useDispatch } from "react-redux";
import { changeTheme } from "../stores/theme";

export default function Theme() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(changeTheme())}>Change theme</button>
    </div>
  );
}
