import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
      Expinfo: {
        companyname: "",
        position: "",
        cdatefrom: "",
        cdateto: "",
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
      Expinfo: {
        companyname: this.state.companyname,
        position: this.state.position,
        cdatefrom: this.state.cdatefrom,
        cdateto: this.state.cdateto,
      },
    });
  }

  render() {
    const { Pinfo, Einfo, Expinfo } = this.state;
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
            <label htmlFor="aboutme">About me:</label>
            <textarea
              type="text"
              id="aboutme"
              name="aboutme"
              placeholder="About me..."
              onChange={this.handleChange}
            ></textarea>
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

          <div className="experience-input">
            <h2>Experience:</h2>
            <label htmlFor="companyname">Company name:</label>
            <input
              type="text"
              id="companyname"
              name="companyname"
              placeholder="Company name"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="">Date from:</label>
            <input
              type="date"
              id="cdatefrom"
              name="cdatefrom"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="">Date to:</label>
            <input
              type="date"
              id="cdateto"
              name="cdateto"
              onChange={this.handleChange}
            ></input>
          </div>
          <button>Submit</button>
        </div>
        <div className="info-container">
          <Personal Pinfo={Pinfo}></Personal>
          <Education Einfo={Einfo}></Education>
          <Experience Expinfo={Expinfo}></Experience>
        </div>
      </form>
    );
  }
}

export default App;
