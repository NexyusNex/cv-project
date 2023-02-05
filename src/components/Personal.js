import React from "react";

class Personal extends React.Component {
  render() {
    return (
      <div className="personal-input">
        <h2>Personal details:</h2>
        <label htmlFor="Fname">First name:</label>
        <input
          type="text"
          id="Fname"
          name="Fname"
          placeholder="First name"
        ></input>
        <label htmlFor="Lname">Last name:</label>
        <input
          type="text"
          id="Lname"
          name="Lname"
          placeholder="Last name"
        ></input>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="John123@gmail.com"
        ></input>
        <label htmlFor="tel">Phone number:</label>
        <input type="tel" id="tel" name="tel" placeholder="0612356163"></input>
      </div>
    );
  }
}

export default Personal;
