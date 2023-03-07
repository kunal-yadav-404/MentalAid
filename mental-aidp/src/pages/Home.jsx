import React from "react";
import mainPhoto from "../img/home.png";
import docPhoto from "../img/doc.png";
import "../index.css";

import NavBar from "../components/navbar";

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
              HAPPY HOLI Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Obcaecati neque, minus necessitatibus culpa eligendi
              nesciunt mollitia reiciendis voluptatum laboriosam libero
              aspernatur. Laudantium exercitationem molestiae tempora odit,
              nobis animi at eligendi.
              <br></br>
              <br></br>
              <br></br>
              Aage ka kro
            </p>
          </div>
          <div className="banner__author">
            <img
              src={docPhoto}
              alt="Fatima Mujahid"
              className="banner__authorImage"
            />
            <div>
              <p className="banner__authorName">Fatima Mujahid</p>
              <p className="banner__date">September 10, 2021</p>
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
