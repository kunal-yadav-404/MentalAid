import React from 'react'
import { FaPlayCircle , FaRegStopCircle } from 'react-icons/fa';
import { useState , useEffect } from 'react';
import axios from 'axios';

function Detect() {
  const hisse=[];
  const [chng,setchng]=useState(false);
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
        setchng(true);
      });
    });
  };
  useEffect(()=>{
    if(chng){
      window.location.href='./result';
    }
  },[chng]);

  function labon(){
    document.getElementById("reclab").classList.remove("hidden");
  }
  function laboff(){
    document.getElementById("reclab").classList.add("hidden");
  }
  return (
    <div className='text-center h-screen '>
    <h6 id='reclab' className='hidden pt-2'>Recording...</h6>
      <div className='flex justify-center items-center mt-16'>
        <video autoPlay muted controls id="tv"></video>
      </div>
      <div className='mx-auto my-5'>
        <button className='bg-slate-300 hover:bg-slate-400 mr-5 rounded-full arambh' onClick={labon}><FaPlayCircle size={30}/></button>
        <button className='bg-slate-300 hover:bg-slate-400 ml-5 rounded-full viram' onClick={laboff}><FaRegStopCircle size={30}/></button>
      </div>
    </div>
  )
}

export default Detect