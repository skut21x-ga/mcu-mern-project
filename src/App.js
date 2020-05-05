import React, { Component } from "react";
import "./App.css";
import Characters from "./Characters.js";
import AllCharacters from "./AllCharacters.js";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Create from "./Create.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [null],
    };
  }

  // createCharacter(data) {
  //   axios
  //     .post(
  //       `https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com`,
  //       { Name: data.real_name, Title: data.title, Species: data.species }
  //              {
  //         headers: {
  //           "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/",
  //         }, */
  //        } */
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   alert("New Song Created in Database");
  // }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h3 className="PageTitle">
            Marvel Cinematic Universe Character Database
          </h3>
        </div>

        <h3 className="selectors">
          <Link className="viewButton" to="/">
            {" "}
            View All Characters
          </Link>
          <Link className="createButton" to="/create">
            {" "}
            Create New Character
          </Link>

          {/* <Link to="/Inhumans/"> View Hu</Link>
          <Link to="/Species/"> View INHUMANS</Link> */}
        </h3>
        <div className="Body">
          <div className="ContentContainer">
            {" "}
            <Route path="/" exact component={AllCharacters} />{" "}
            <Route path="/name/:name" exact component={Characters} />
            <Route path="/create" exact component={Create} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
