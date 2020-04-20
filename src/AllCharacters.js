import React, { Component } from "react";
import "./AllCharacters.css";
import { Route, Link } from "react-router-dom";

class AllCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = { character: [null] };
  }

  componentDidMount() {
    let url =
      "https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com/";
    // { route };
    fetch(url, {})
      .then((res) => res.json())
      .then((res) => this.setState({ character: res }));
  }

  render() {
    console.log("MOUNTED CHARACTERS");
    let allcharacters = this.state.character.map((character) => {
      if (character !== null && character.real_name !== "NA") {
        return (
          <div className="allCharacterBox" key={character._id}>
            <Link to={"/name/" + character.real_name}>
              <div className="allCharacterNameBox">
                <h3 className="allCharacterName">{character.real_name}</h3>
              </div>
            </Link>{" "}
          </div>
        );
      }
    });

    return (
      <div className="AllContentContainer">
        <div>
          <div className="allContentContainer">{allcharacters}</div>
        </div>
      </div>
    );
  }
}

export default AllCharacters;
