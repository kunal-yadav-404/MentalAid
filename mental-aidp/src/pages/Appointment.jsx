import React from "react";
import "../css/appointment.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Appointment() {
  return (
    <div className="appoint">
      <h1 className="appoint-head">SCHEDULE AN APPOINTMENT</h1>
      <div className="appointmentContent">
        <img
          className="appoint-img"
          src="https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148514643.jpg?w=2000"
        ></img>
        <div className="bs appointment-form">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type="text" placeholder="Patient Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Reason of consultation</Form.Label>
              <Form.Control type="text" placeholder="Specify reason" />
            </Form.Group>
            <br />
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="select date" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="select time" />
              </Form.Group>
            </Row>
            <br />

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Accept all policies" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Book Appointment
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
