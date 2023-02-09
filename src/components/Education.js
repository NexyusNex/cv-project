import React from "react";

function Education(props) {
  return (
    <div className="education-info">
      <h1>Education:</h1>
      <div className="school-card">
        <h3>
          {props.datefrom} - {props.dateto}
        </h3>
        <div>
          <h3>{props.school}</h3>
          <p>{props.study}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
