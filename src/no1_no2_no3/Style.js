import styles from "./Style.module.css";
import { Title } from "./Components";
import "../no1_no2_no3/tailwind.css";
import Tailwind from "./Tailwind";

function Style() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme={"dark"}>{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>

      <Tailwind />
    </div>
  );
}

export default Style;
