import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ResumePage from "./components/Resume";
import PhotographyPage from "./components/Photography";
import Footer from "./components/Footer";

function App() {
  return (
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
  );
}

export default App;
