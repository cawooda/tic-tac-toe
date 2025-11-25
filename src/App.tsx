import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext not provided");
  }
  const { theme, setTheme } = themeContext;
  return (
    <div className={`app-container ${theme}`}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <h1>Tic Tac Toe</h1>
    </div>
  );
}

export default App;
