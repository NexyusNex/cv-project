import React from "react";
import phone from "../phone.svg";
import email from "../email.svg";

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-info">
        <h1>
          {this.props.CV.Fname} {this.props.CV.Lname}
        </h1>
        <div>
          <p>
            <img src={email} alt="email"></img>
            {this.props.CV.email}
          </p>
          <p>
            <img src={phone} alt="phone"></img>
            {this.props.CV.tel}
          </p>
        </div>
      </div>
    );
  }
}

export default Personal;
