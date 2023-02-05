import React from "react";
import Personal from "./components/Personal";

class App extends React.Component {
  render() {
    return (
      <form className="container">
        <div className="input-container">
          <h1>CV Application</h1>
          <Personal></Personal>
          <button>Submit</button>
        </div>
        <div className="info-container">
          <h1>Info:</h1>
        </div>
      </form>
    );
  }
}

export default App;
