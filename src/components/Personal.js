import React from "react";

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.CV.Fname}</p>
        <p>{this.props.CV.Lname}</p>
        <p>{this.props.CV.email}</p>
        <p>{this.props.CV.tel}</p>
      </div>
    );
  }
}

export default Personal;
