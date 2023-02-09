import React from "react";
import phone from "../phone.svg";
import email from "../email.svg";

function Personal(props) {
  return (
    <div className="personal-info">
      <h1>
        {props.Fname} {props.Lname}
      </h1>
      <div>
        <p>
          <img src={email} alt="email"></img>
          {props.email}
        </p>
        <p>
          <img src={phone} alt="phone"></img>
          {props.tel}
        </p>
      </div>
    </div>
  );
}

export default Personal;
