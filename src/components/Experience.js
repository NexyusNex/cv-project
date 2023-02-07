import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div className="experience-info">
        <h1>Experience:</h1>
        <div className="exp-card">
          <h3>
            {this.props.Expinfo.cdatefrom} - {this.props.Expinfo.cdateto}
          </h3>
          <div>
            <h3>{this.props.Expinfo.companyname}</h3>
            <p>{this.props.Expinfo.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
