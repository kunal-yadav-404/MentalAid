import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Detect from "./pages/Detect";
import Services from "./pages/Services";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detect" element={<Detect />} />
      </Routes>
    </>
  );
}

export default App;
