import "./styles/main.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDark] = useState(() => {
    const stored = localStorage.getItem("isDark");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={"app-container " + (isDarkMode ? "dark-mode" : "")}>
      <main className="container">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Home />
      </main>
    </div>
  );
}

export default App;
