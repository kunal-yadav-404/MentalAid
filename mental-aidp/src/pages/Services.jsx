import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import { Routes, Route } from "react-router-dom";

import "../css/services.css";

function Services() {
  return (
    <div className="service">
      <div className="service-logo">
        <h1>OUR SERVICES</h1>
        <p>
          “Being able to be your true self is one of the strongest components of
          good mental health.” — Dr. Lauren Fogel Mersy{" "}
        </p>
      </div>
      <div className="cards">
        <Card className="card-body" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://149646685.v2.pressablecdn.com/wp-content/uploads/2020/07/shutterstock_1727099176-scaled.jpg"
          />
          <Card.Body>
            <Card.Title>Live Session Video Recording</Card.Title>
            <Card.Text>
              We allow doctors to record the ongoing therapy session on daily
              basis.These recorded videos are then used for further analysis of
              the individuals emotional pattern
            </Card.Text>
            <Button variant="primary" style={{ color: "black" }}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>

        <Card className="card-body" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://counselingwellnesspgh.com/wp-content/uploads/2018/02/family-counseling-pittsburgh.jpg"
          />
          <Card.Body>
            <Card.Title>Studying Facial Expression</Card.Title>
            <Card.Text>
              Using ML we study the real time facial expressions of the
              individual to identify any kind of change in his/her emotional
              state during the session.This help us create a detailed report of
              their emotional pattern
            </Card.Text>
            <Button variant="primary" style={{ color: "black" }}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>

        <Card className="card-body" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://149646685.v2.pressablecdn.com/wp-content/uploads/2020/07/shutterstock_1727099176-scaled.jpg"
          />
          <Card.Body>
            <Card.Title>
              Detailed Analysis using graphical Representation
            </Card.Title>
            <Card.Text>
              We do detailed analysis and give graphical representation of
              emotion vs time after each session which can be then be compared
              to see if there are any improvements in individuals state ..
            </Card.Text>
            <Button variant="primary" style={{ color: "black" }}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>

        <Card className="card-body" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://149646685.v2.pressablecdn.com/wp-content/uploads/2020/07/shutterstock_1727099176-scaled.jpg"
          />
          <Card.Body>
            <Card.Title>Appointment and Patient record</Card.Title>
            <Card.Text>
              We will provide a portal to book appointment with the doctor and
              record patients sessions and results regularly
            </Card.Text>
            <Button variant="primary" style={{ color: "black" }}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Services;
