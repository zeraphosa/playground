import styles from "./App.module.css";
import { Title } from "./Components";
import "./tailwind.css";
import Tailwind from "./Tailwind";

function App() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme={"dark"}>{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>

      <Tailwind />
    </div>
  );
}

export default App;
