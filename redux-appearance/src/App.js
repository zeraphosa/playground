import useDarkMode from "./hooks/useDarkMode";
import "./App.css";

export default function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="app">
      <div className={`${theme}`}>Navbar</div>
      <div>Sidebar</div>
      <div>Content</div>
      <button onClick={toggleTheme}>Toggle Appearance</button>
    </div>
  );
}
