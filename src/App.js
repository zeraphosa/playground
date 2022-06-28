import CounterAction from "./components/CounterActions";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux/es/exports";
import { routes } from "./routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const { dark } = useSelector((state) => state.site);
  // const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className={dark ? "dark" : "light"}>
        <Header />
        <Counter />
        <CounterAction />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// render={() => {
//   if (route.auth && !user) {
//     return <Navigate to="/login" />;
//   }
//   return <route.component/>
// }}
