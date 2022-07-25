import "../no1_no2_no3/tailwind.css";
import Button from "./component/Button";

export default function No5() {
  return (
    <div>
      <h1>no5</h1>
      <Button text="Button example" variant="success" />
      <Button text="Button example" variant="danger" />
      <Button text="Button example" variant="warning" />
      <Button text="Button example" />
    </div>
  );
}
