import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../css/dashboard.css";

function Result() {
  const [res, setRes] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => {
        setRes(data.result);
      });
  }, []);

  return (
    <>
      <div className="box-divide"></div>
      <div>{res}</div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default Result;
