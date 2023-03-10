import "../css/dashboard.css";

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
function Dashboard() {
  const [stdudentEmotion, setPatientEmotion] = useState([]);
  const [PatientProb, setPatientProb] = useState([]);
  //   var maxEmotion;
  //   var maxVal = 0;

  useEffect(() => {
    const sEmotion = [];
    const sProb = [];

    const getPatientdata = async () => {
      //    const reqData= await fetch("http://localhost/reactgraphtutorial/Prob");
      const reqData = await fetch(
        "https://raw.githubusercontent.com/kunal-yadav-404/fake-data/main/db.json"
      );

      const resData = await reqData.json();
      //   console.log(resData.length);

      for (let i = 0; i < resData.length; i++) {
        sEmotion.push(" " + resData[i].emotion);
        sProb.push(parseInt(resData[i].prob));
        // if (parseInt(resData[i].prob) > maxVal) {
        //   maxVal = parseInt(resData[i].prob);
        //   maxEmotion = " " + resData[i].emotion;
        // }
      }
      setPatientEmotion(sEmotion);
      setPatientProb(sProb);
      //console.log(resData);
    };

    getPatientdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container-dash">
        {/* <div>Max Prob is of {maxEmotion} </div> */}
        <h3 className="head-dash">Overall Emotion Probability</h3>
        <Chart
          type="pie"
          width={1349}
          height={550}
          series={PatientProb}
          options={{
            title: { text: "" },
            noData: { text: "" },
            // colors:["#f90000","#f0f"],
            labels: stdudentEmotion,
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Dashboard;
