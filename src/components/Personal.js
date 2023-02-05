import React from "react";

class Personal extends React.Component {
  render() {
    return (
      <div className="personal-input">
        <label for="Fname">
          First name:
          <input type="text" id="Fname" name="Fname"></input>
        </label>
        <label for="Lname">
          Last name:
          <input type="text" id="Lname" name="Lname"></input>
        </label>
        <label for="email">
          E-mail:
          <input type="email" id="email" name="email"></input>
        </label>
        <label for="tel">
          Phone number:
          <input type="tel" id="tel" name="tel"></input>
        </label>
      </div>
    );
  }
}

export default Personal;
