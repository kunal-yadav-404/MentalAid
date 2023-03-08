import { Link, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Detect from "./pages/Detect";
import Services from "./pages/Services";
import Result from "./pages/Result";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
