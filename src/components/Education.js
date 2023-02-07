import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="education-info">
        <h1>Education:</h1>
        <p>{this.props.Einfo.school}</p>
        <p>{this.props.Einfo.study}</p>
        <p>{this.props.Einfo.datefrom}</p>
        <p>{this.props.Einfo.dateto}</p>
      </div>
    );
  }
}

export default Education;
