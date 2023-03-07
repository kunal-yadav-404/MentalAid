import React from "react";
import "../index.css";

import NavBar from "../components/navbar";

function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
}

const Detect = () => {
  const [selectedFile, setSelectedFile] = React.useState({
    file: null,
    duration: 0,
    size: 0,
  });

  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function () {
        var aud = new Audio(reader.result);
        aud.onloadedmetadata = function () {
          resolve(convertHMS(aud.duration));
        };
      };
      reader.readAsDataURL(file);
    })
      .then((duration) => {
        setSelectedFile({ file, duration, size: file?.size });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("selectedFile", selectedFile);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("inputFile", selectedFile);
    // console.log(formData);
  };

  return (
    <>
      <div className="btn2">
        <form onSubmit={handleSubmit} className="form">
          <label className="head">
            Upload a file: <br />
            <br />
            <input
              type="file"
              name="file"
              className="btn"
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <br />
          <button type="submit" className="upload">
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Detect;
