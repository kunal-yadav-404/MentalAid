import React from "react";
import mainPhoto from "../images/home.png";
import docPhoto from "../images/doc.png";

import "../index.css";

const Home = () => {
  return (
    <>
      <header className="banner">
        <img className="banner__image" src={mainPhoto} alt="Blog Title" />
        <div className="banner__contents">
          <div className="banner__blog">
            <p className="banner__category">MentalAid</p>
            <h1 className="banner__title">We give solution to your pain</h1>
            <p className="banner__body">
              Recognizing emotional patterns is essential for doctor to be able
              to assist his patients more effectively and to provide them with
              proper medication.We aim to aid doctors in recognizing these
              patterns using ML which will help save essential time and will
              give more accurate results.This will speed up the recovery of an
              individual
              <br></br>
              <br></br>
              <br></br>
              "You, yourself, as much as anybody in the entire universe, deserve
              your love and affection."
            </p>
          </div>
          <div className="banner__author">
            <img
              src={docPhoto}
              alt="Fatima Mujahid"
              className="banner__authorImage"
            />
            <div>
              <p className="banner__authorName">Buddha</p>
              <p className="banner__date">March 10, 2023</p>
            </div>
          </div>
        </div>
        <div className="banner__arrows">
          <i
            className="fa fa-long-arrow-left banner__arrow"
            aria-hidden="true"
          ></i>
          <i
            className="fa fa-long-arrow-right banner__arrow"
            aria-hidden="true"
          ></i>
        </div>
      </header>
    </>
  );
};

export default Home;
