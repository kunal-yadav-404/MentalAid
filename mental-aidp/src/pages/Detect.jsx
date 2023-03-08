import React from 'react'
import { FaPlayCircle , FaRegStopCircle } from 'react-icons/fa';
import { useState , useEffect } from 'react';
import axios from 'axios';

function Detect() {
  const hisse=[];
  let mediaRecorder;
  window.onload = function() {
    navigator.mediaDevices.getUserMedia({ video:true ,audio:true}).then(stream => {
      document.getElementById("tv").srcObject = stream;
      
      document.getElementsByClassName("arambh")[0].addEventListener("click", function() {
        console.log("recording");
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start(1000);
        mediaRecorder.ondataavailable = function(e) {
          hisse.push(e.data);
        };
      });
  
      document.getElementsByClassName("viram")[0].addEventListener("click", function() {
        mediaRecorder.stop();
        console.log("recording stopped");
        const blob = new Blob(hisse, { type:"video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display:none";
        a.href = url;
        a.download = "test.webm";
        a.click();
      });
    });
  };
  
  const handleClick= ()=>{
    window.location.href='./result';
  }
 
  return (
    <div className='text-center h-screen'>
      <div className='flex justify-center items-center mt-16'>
        <video autoPlay muted controls id="tv"></video>
      </div>
      <div className='mx-auto my-5'>
        <button className='px-3 arambh'><FaPlayCircle size={30}/></button>
        <button className='px-3 viram'><FaRegStopCircle size={30}/></button>
      </div>
      <div>
        <button onClick={handleClick}>Analyze</button>
      </div>
    </div>
  )
}

export default Detect