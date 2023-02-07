import React from "react";
import phone from "../phone.svg";
import email from "../email.svg";

class Personal extends React.Component {
  render() {
    return (
      <div className="personal-info">
        <h1>
          {this.props.Pinfo.Fname} {this.props.Pinfo.Lname}
        </h1>
        <div>
          <p>
            <img src={email} alt="email"></img>
            {this.props.Pinfo.email}
          </p>
          <p>
            <img src={phone} alt="phone"></img>
            {this.props.Pinfo.tel}
          </p>
        </div>
      </div>
    );
  }
}

export default Personal;
