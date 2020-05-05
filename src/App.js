import React, { Component } from "react";
import "./App.css";
import Characters from "./Characters.js";
import AllCharacters from "./AllCharacters.js";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [null],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h3 className="PageTitle">
            Marvel Cinematic Universe Character Database
          </h3>
        </div>

        <h3 className="selectors">
          <Link to="/"> View All Characters</Link>
          {/* <Link to="/Inhumans/"> View Hu</Link>
          <Link to="/Species/"> View INHUMANS</Link> */}
        </h3>
        <div className="Body">
          <div className="ContentContainer">
            {" "}
            <Route path="/" exact component={AllCharacters} />{" "}
            <Route path="/name/:name" exact component={Characters} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
