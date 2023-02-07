import React from "react";

class Aboutme extends React.Component {
  render() {
    return (
      <div className="about-me">
        <h1>About me:</h1>
        <p>{this.props.Pinfo.aboutme}</p>
      </div>
    );
  }
}
export default Aboutme;
