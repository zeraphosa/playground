import CounterAction from "./components/CounterActions";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux/es/exports";

export default function App() {
  const { dark } = useSelector((state) => state.site);

  return (
    <div className={dark ? "dark" : "light"}>
      <Header />

      <Counter />
      <CounterAction />

      <Footer />
    </div>
  );
}
