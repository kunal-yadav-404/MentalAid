import React from "react";
//import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
      {/* <div class="NavBar">
      <div class="container">
        Kunal Yadav
        
      </div>
  </div> */}
      <nav className="nav">
        <span className="nav__logo">MentalAid</span>
        <div className="nav__items">
          {/* <Link to="/blogs/new">New Blog</Link> */}
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About Us</a>
          <a href="">Detect</a>
          {/* <Link to="/detect">Detect</Link> */}
          <button>Log In</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
