import React from "react";

function Experience(props) {
  return (
    <div className="experience-info">
      <h1>Experience:</h1>
      <div className="exp-card">
        <h3>
          {props.cdatefrom} - {props.cdateto}
        </h3>
        <div>
          <h3>{props.companyname}</h3>
          <p>{props.position}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
