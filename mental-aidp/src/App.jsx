import { Link, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Detect from "./pages/Detect";
import Services from "./pages/Services";
import Result from "./pages/Result";
import Record from "./pages/record";
import Appointment from "./pages/Appointment";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/record" element={<Record />} />
        <Route path="/services/appointment" element={<Appointment />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/result/*" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
