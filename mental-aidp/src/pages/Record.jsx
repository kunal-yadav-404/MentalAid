import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/record.css";
function Record() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.files) {
      const file = event.target.files[0];
      setInputs({ ...inputs, [name]: file });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Show history of patient?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#52c74a",
      showCloseButton: true,
      showDenyButton: true,
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Showing", "", "Record");
        console.log(inputs);
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "", "");
      }
    });
  };

  return (
    <div className="background-1">
      <div className="complaint-box">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/463/830/original/mental-health-vector-illustration.jpg"
          className="img-1"
        />
        <div className="complaint-box-details text-white">
          <h1 className="heading">Patient History</h1>
          <Form onSubmit={handleSubmit} className="text-white w-100">
            <div>
              <label className="text-white">
                Patient Name
                <br />
                <Form.Control
                  type="Void"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  className="w-100"
                />
              </label>
            </div>
            <div>
              <label>
                Age
                <br />
                <Form.Control
                  type="number"
                  name="age"
                  value={inputs.age || ""}
                  onChange={handleChange}
                  className="w-100"
                />
              </label>
            </div>
            <div>
              <label>
                Sex
                <br />
                <Form.Control
                  type="text"
                  name="sex"
                  value={inputs.sex || ""}
                  onChange={handleChange}
                  className="w-100"
                />
              </label>
            </div>
            <div>
              <label>
                Date of Birth
                <br />
                <Form.Control
                  placeholder="MM/DD/YYY"
                  type="text"
                  name="dob"
                  value={inputs.dob || ""}
                  onChange={handleChange}
                  className="w-100"
                />
                {/* <DatePicker  
            
             
              name="dob"  
              value={inputs.dob || ""}
             
              placeholderText="MM/dd/yyyy"  
              onChange={ handleChange  }
              className="w-100"
          />   */}
              </label>
            </div>

            <Button className="button-1" type="submit" onClick={handleSubmit}>
              Show Data
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Record;
