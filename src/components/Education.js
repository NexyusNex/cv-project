import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="education-info">
        <h1>Education:</h1>
        <div className="school-card">
          <h3>
            {this.props.Einfo.datefrom} - {this.props.Einfo.dateto}
          </h3>
          <div>
            <h3>{this.props.Einfo.school}</h3>
            <p>{this.props.Einfo.study}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
