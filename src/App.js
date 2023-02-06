import React from "react";
import Personal from "./components/Personal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CV: {
        Fname: "",
        Lname: "",
        email: "",
        tel: "",
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
      CV: {
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        email: this.state.email,
        tel: this.state.tel,
      },
    });
  }

  render() {
    const { CV } = this.state;
    console.log(this.state.Fname);
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
            ></input>
            <label htmlFor="study">Title of study:</label>
            <input
              type="text"
              id="study"
              name="study"
              placeholder="School title of study"
            ></input>
            <label htmlFor="datefrom">Date from:</label>
            <input type="date" id="datefrom" name="datefrom"></input>
            <label htmlFor="dateto">Date to:</label>
            <input type="date" id="dateto" name="dateto"></input>
          </div>
          <button>Submit</button>
        </div>
        <div className="info-container">
          <Personal CV={CV}></Personal>
        </div>
      </form>
    );
  }
}

export default App;
