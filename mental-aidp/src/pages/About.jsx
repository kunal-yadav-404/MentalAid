import React from "react";
import "../css/about.css";

function About() {
  return (
    <div className="abt">
      <h1 className="about-head">ABOUT US</h1>
      <div className="about">
        <div className="about-section">
          <p>
            We are a non-profit organisation looking into ways to assist people
            in overcoming mental health issues. We intend to provide novel
            techniques to identify emotional patterns by digitally studying a
            person's real-time facial expressions and body language during
            regular therapy sessions using ML and then providing a graphical
            representation of individuals change in emotions with time.This
            allows doctors to analyse patients state of mind more accurately,
            thus helping them to provide better guidance and medication to the
            individual. Our objective is to be a helping hand to our therapists
            worldwide and join in their pledge of helping people fighting
            against mental health issues.
          </p>
        </div>
        <img
          className="about-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3D9Ir2hPRcnz6c-5d_uy5EjBwTuEOCiRRnhEyDsAvNx-MjitQlCfrAq1zABn59JVfHk&usqp=CAU"
        ></img>
      </div>
    </div>
  );
}

export default About;
