import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Detect from "./pages/detect";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
