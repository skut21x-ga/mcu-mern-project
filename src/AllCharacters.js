import React, { Component } from "react";
import "./AllCharacters.css";
import { Route, Link } from "react-router-dom";
import Alphabet from "./Alphabet/Alphabet";

class AllCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: [],
      character: [null],
      filteredCharacters: [null],
    };
  }

  componentDidMount() {
    let url =
      "https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com/";

    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/name",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({ character: res, filteredCharacters: res })
      );
  }

  filterCharacter = (letter) => {
    console.log(letter, "clicked from the ALL Character component ");
    let filteredCharacter = this.state.character.filter((character, i) => {
      if (character.real_name) {
        return (
          character.real_name.toLowerCase().charAt(0) === letter.toLowerCase()
        );
      } else {
        return false;
      }
    });
    this.setState({
      filterCharacter: letter,
      filteredCharacters: filteredCharacter,
    });
    console.log(this.state.filteredCharacters);
  };
  render() {
    // const character = this.state.filteredCharacters;
    console.log(this.state.character);
    let allcharacters = this.state.filteredCharacters.map((character) => {
      if (
        character !== null &&
        character.real_name !== "NA" &&
        character.real_name !== undefined
      ) {
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
        <div className="alphabetBox">
          <Alphabet letterSelector={this.filterCharacter} />{" "}
        </div>
        <div>
          <div className="allContentContainer">{allcharacters}</div>
        </div>
      </div>
    );
  }
}

export default AllCharacters;
