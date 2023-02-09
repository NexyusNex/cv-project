import React from "react";

function Aboutme(props) {
  return (
    <div className="about-me">
      <h1>About me:</h1>
      <p>{props.aboutme}</p>
    </div>
  );
}
export default Aboutme;
