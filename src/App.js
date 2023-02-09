import React, { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Aboutme from "./components/Aboutme";

function App(props) {
  const [Info, setInfo] = useState({
    Fname: "",
    Lname: "",
    email: "",
    tel: "",
    aboutme: "",
    school: "",
    study: "",
    dateto: "",
    datefrom: "",
    companyname: "",
    position: "",
    cdatefrom: "",
    cdateto: "",
  });
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [datefrom, setDatefrom] = useState("");
  const [dateto, setDateto] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [position, setPosition] = useState("");
  const [cdatefrom, setCdatefrom] = useState("");
  const [cdateto, setCdateto] = useState("");

  function displayPersonal() {
    const personal = document.querySelector(".personal-input");
    if (personal.style.display !== "flex") {
      personal.style.display = "flex";
    } else {
      personal.style.display = "none";
    }
  }

  function displayEducation() {
    const education = document.querySelector(".education-input");
    if (education.style.display !== "flex") {
      education.style.display = "flex";
    } else {
      education.style.display = "none";
    }
  }

  function displayExperience() {
    const experience = document.querySelector(".experience-input");
    if (experience.style.display !== "flex") {
      experience.style.display = "flex";
    } else {
      experience.style.display = "none";
    }
  }

  function handleChange(e) {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
    });
  }
  /* eslint-disable no-unused-vars */
  function ApplyInfo(e) {
    e.preventDefault();
    setFname((Fname) => Info.Fname);
    setLname((Lname) => Info.Lname);
    setEmail((email) => Info.email);
    setTel((tel) => Info.tel);
    setAboutme((aboutme) => Info.aboutme);
    setSchool((school) => Info.school);
    setStudy((study) => Info.study);
    setDatefrom((datefrom) => Info.datefrom);
    setDateto((dateto) => Info.dateto);
    setCompanyname((companyname) => Info.companyname);
    setPosition((position) => Info.position);
    setCdatefrom((cdatefrom) => Info.cdatefrom);
    setCdateto((cdateto) => Info.cdateto);
  }
  /* eslint-disable no-unused-vars */
  return (
    <form className="container" onSubmit={ApplyInfo}>
      <div className="input-container">
        <h1>CV Application</h1>
        <div className="title">
          <h2>Personal details:</h2>
          <button className="hide" type="button" onClick={displayPersonal}>
            <div className="plus">+</div>
          </button>
        </div>
        <div className="personal-input">
          <label htmlFor="Fname">First name:</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            value={Info.Fname}
            placeholder="First name"
            onChange={handleChange}
          ></input>
          <label htmlFor="Lname">Last name:</label>
          <input
            type="text"
            id="Lname"
            name="Lname"
            value={Info.Lname}
            placeholder="Last name"
            onChange={handleChange}
          ></input>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={Info.email}
            placeholder="John123@gmail.com"
            onChange={handleChange}
          ></input>
          <label htmlFor="tel">Phone number:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={Info.tel}
            placeholder="0612356163"
            onChange={handleChange}
          ></input>
          <label htmlFor="aboutme">About me:</label>
          <textarea
            type="text"
            id="aboutme"
            name="aboutme"
            value={Info.aboutme}
            placeholder="About me..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="title">
          <h2>Education:</h2>
          <button className="hide" type="button" onClick={displayEducation}>
            +
          </button>
        </div>
        <div className="education-input">
          <label htmlFor="school">School:</label>
          <input
            type="text"
            id="school"
            name="school"
            value={Info.school}
            placeholder="School name"
            onChange={handleChange}
          ></input>
          <label htmlFor="study">Title of study:</label>
          <input
            type="text"
            id="study"
            name="study"
            value={Info.study}
            placeholder="School title of study"
            onChange={handleChange}
          ></input>
          <label htmlFor="datefrom">Date from:</label>
          <input
            type="date"
            id="datefrom"
            name="datefrom"
            value={Info.datefrom}
            onChange={handleChange}
          ></input>
          <label htmlFor="dateto">Date to:</label>
          <input
            type="date"
            id="dateto"
            name="dateto"
            value={Info.dateto}
            onChange={handleChange}
          ></input>
        </div>
        <div className="title">
          <h2>Experience:</h2>
          <button className="hide" type="button" onClick={displayExperience}>
            +
          </button>
        </div>
        <div className="experience-input">
          <label htmlFor="companyname">Company name:</label>
          <input
            type="text"
            id="companyname"
            name="companyname"
            value={Info.companyname}
            placeholder="Company name"
            onChange={handleChange}
          ></input>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={Info.position}
            placeholder="Position"
            onChange={handleChange}
          ></input>
          <label htmlFor="">Date from:</label>
          <input
            type="date"
            id="cdatefrom"
            name="cdatefrom"
            value={Info.cdatefrom}
            onChange={handleChange}
          ></input>
          <label htmlFor="">Date to:</label>
          <input
            type="date"
            id="cdateto"
            name="cdateto"
            value={Info.cdateto}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </div>
      <div className="info-container">
        <Personal
          Fname={Fname}
          Lname={Lname}
          email={email}
          tel={tel}
        ></Personal>
        <Aboutme aboutme={aboutme}></Aboutme>
        <Education
          school={school}
          study={study}
          datefrom={datefrom}
          dateto={dateto}
        ></Education>
        <Experience
          companyname={companyname}
          position={position}
          cdatefrom={cdatefrom}
          cdateto={cdateto}
        ></Experience>
      </div>
    </form>
  );
}

export default App;
