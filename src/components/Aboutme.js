import React from "react";

class Aboutme extends React.Component {
  render() {
    return (
      <div className="about-me">
        <h1>About me:</h1>
        <p>
          <h3>-</h3>
          {this.props.Pinfo.aboutme}
        </p>
      </div>
    );
  }
}
export default Aboutme;
