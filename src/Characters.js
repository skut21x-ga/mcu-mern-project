import React, { Component } from "react";
import "./Characters.css";
import axios from "axios";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = { character: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com/name/" +
          this.props.match.params.name,
        {
          headers: {
            "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/name",
          },
        }
      )
      .then((res) => this.setState({ character: res.data }));
  }

  render() {
    let singlecharacter = this.state.character.map((character) => {
      if (character !== null && character.real_name !== "NA") {
        return (
          <div
            className="characterCharacterBox"
            key={this.state.character[0]._id}
          >
            <div className="characterNameBox">
              <h5 className="name">{this.state.character[0].real_name}</h5>
              <h5>
                {this.state.character[0].species !== "NA" && "Species: "}
                {this.state.character[0].species !== "NA" &&
                  this.state.character[0].species}
              </h5>
              <h5>
                {this.state.character[0].title !== "NA" && "Title: "}
                {this.state.character[0].title !== "NA" &&
                  this.state.character[0].title}
              </h5>
              <h5>
                {this.state.character[0].gender !== "NA" && "Gender: "}
                {this.state.character[0].gender !== "NA" &&
                  this.state.character[0].gender}
              </h5>
              <h5>
                {this.state.character[0].status !== "NA" && "Status: "}
                {this.state.character[0].status !== "NA" &&
                  this.state.character[0].status}
              </h5>
              <h5>
                {this.state.character[0].category !== "NA" && "Category: "}
                {this.state.character[0].category !== "NA" &&
                  this.state.character[0].category}
              </h5>
              <h5>
                {this.state.character[0].affiliation !== "NA" &&
                  "Affiliation: "}
                {this.state.character[0].affiliation !== "NA" &&
                  this.state.character[0].affiliation}
              </h5>
              <h5>
                {this.state.character[0].citizenship !== "NA" &&
                  "Citizenship: "}
                {this.state.character[0].citizenship !== "NA" &&
                  this.state.character[0].citizenship}
              </h5>
              <h5>
                {this.state.character[0].clearance !== "NA" && "Clearance: "}
                {this.state.character[0].clearance !== "NA" &&
                  this.state.character[0].clearance}
              </h5>
              <h5>
                {this.state.character[0].comic !== "NA" && "Comic: "}
                {this.state.character[0].comic !== "NA" &&
                  this.state.character[0].comic}
              </h5>
              <h5>
                {this.state.character[0].date_of_birth !== "NA" &&
                  "Date of birth: "}
                {this.state.character[0].date_of_birth !== "NA" &&
                  this.state.character[0].date_of_birth}
              </h5>
              <h5>
                {this.state.character[0].date_of_death !== "NA" &&
                  "Date of death: "}
                {this.state.character[0].date_of_death !== "NA" &&
                  this.state.character[0].date_of_death}
              </h5>

              <h5>
                {this.state.character[0].alias !== "NA" && "Alias: "}
                {this.state.character[0].alias !== "NA" &&
                  this.state.character[0].alias}
              </h5>
              <h5>
                {this.state.character[0].clearance !== "NA" && "Clearance: "}
                {this.state.character[0].clearance !== "NA" &&
                  this.state.character[0].clearance}
              </h5>
              <h5>
                {this.state.character[0].game !== "NA" && "Game: "}
                {this.state.character[0].game !== "NA" &&
                  this.state.character[0].game}
              </h5>

              <h5>
                {this.state.character[0].movie !== "NA" && "Movie: "}
                {this.state.character[0].movie !== "NA" &&
                  this.state.character[0].movie}
              </h5>
              <h5>
                {this.state.character[0].one_shot !== "NA" && "One shot: "}
                {this.state.character[0].one_shot !== "NA" &&
                  this.state.character[0].one_shot}
              </h5>
              <h5>
                {this.state.character[0].portrayed_by !== "NA" &&
                  "Portrayed by: "}
                {this.state.character[0].portrayed_by !== "NA" &&
                  this.state.character[0].portrayed_by}
              </h5>
              <h5>
                {this.state.character[0].tv_series !== "NA" && "TV Series: "}
                {this.state.character[0].tv_series !== "NA" &&
                  this.state.character[0].tv_series}
              </h5>
              <h5>
                {this.state.character[0].voiced_by !== "NA" && "Voiced by: "}
                {this.state.character[0].voiced_by !== "NA" &&
                  this.state.character[0].voiced_by}
              </h5>
              <h5 className="bottomH5">
                {this.state.character[0].web_series !== "NA" && "Web series: "}
                {this.state.character[0].web_series !== "NA" &&
                  this.state.character[0].web_series}
              </h5>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="ContentContainer">
        <div className="characterBody">
          <div className="characterContentContainer">{singlecharacter}</div>
        </div>
      </div>
    );
  }
}

export default Characters;
