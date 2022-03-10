import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ResumePage from "./components/Resume";
import PhotographyPage from "./components/Photography";
import Footer from "./components/Footer";
// use localStorage for darkMode
import useLocalStorage from "use-local-storage";

function App() {
  // create two var "defaultDark" and state using local storage, "theme,setTheme"
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/photography" element={<PhotographyPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
