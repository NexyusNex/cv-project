import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Pinfo: {
        Fname: "",
        Lname: "",
        email: "",
        tel: "",
      },
      Einfo: {
        school: "",
        study: "",
        datefrom: "",
        dateto: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.ApplyInfo = this.ApplyInfo.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  ApplyInfo(e) {
    e.preventDefault();
    this.setState({
      Pinfo: {
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        email: this.state.email,
        tel: this.state.tel,
      },
      Einfo: {
        school: this.state.school,
        study: this.state.study,
        datefrom: this.state.datefrom,
        dateto: this.state.dateto,
      },
    });
  }

  render() {
    const { Pinfo, Einfo } = this.state;
    return (
      <form className="container" onSubmit={this.ApplyInfo}>
        <div className="input-container">
          <h1>CV Application</h1>

          <div className="personal-input">
            <h2>Personal details:</h2>
            <label htmlFor="Fname">First name:</label>
            <input
              type="text"
              id="Fname"
              name="Fname"
              placeholder="First name"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="Lname">Last name:</label>
            <input
              type="text"
              id="Lname"
              name="Lname"
              placeholder="Last name"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="John123@gmail.com"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="tel">Phone number:</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="0612356163"
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="education-input">
            <h2>Education:</h2>

            <label htmlFor="school">School:</label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="School name"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="study">Title of study:</label>
            <input
              type="text"
              id="study"
              name="study"
              placeholder="School title of study"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="datefrom">Date from:</label>
            <input
              type="date"
              id="datefrom"
              name="datefrom"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="dateto">Date to:</label>
            <input
              type="date"
              id="dateto"
              name="dateto"
              onChange={this.handleChange}
            ></input>
          </div>
          <button>Submit</button>
        </div>
        <div className="info-container">
          <Personal Pinfo={Pinfo}></Personal>
          <Education Einfo={Einfo}></Education>
        </div>
      </form>
    );
  }
}

export default App;
