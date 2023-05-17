import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../css/dashboard.css";

function Result() {
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => {
        setRes(data.result);
        console.log(res);
      }).catch((error) => {
          console.error(error);
        });
  }, []);

  useEffect(()=>{
    if(res!=""){
      console.log(res);
      setLoading(false);
    }
  },[res]);

  return (
    <>
      <div className="box-divide">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{res}</div>
      )}
      </div>
      <div>{res}</div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default Result;
