import React, { Component } from "react";
import "./Alphabet.css";

//alphabet code from http://www.matthiassommer.it/programming/frontend/alphabetical-list-navigation-with-javascript-html-and-css/

class Alphabet extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      character: null,
    };
  }
  click = (e) => {
    this.props.letterSelector(e.target.getAttribute("data-Value"));
    this.setState(
      {
        artist: e.target.getAttribute("data-Value"),
      },
      this.logstate
    );
  };
  logstate = () => {
    console.log(this.state.artist);
  };
  render() {
    let letterArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    return (
      <div className="alphabetContainer">
        <div className="alphaIndex">
          {letterArray.map((letters, index) => {
            return (
              <div
                className="letters"
                key={index}
                data-value={letters}
                onClick={this.click}
              >
                {letters}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Alphabet;
