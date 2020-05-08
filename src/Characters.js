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

  editCharacter(real_name, rename) {
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com/name/${real_name}`,
        { real_name: rename },
        {
          headers: {
            "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/",
          },
        }
      )
      .then((res) => {
        console.log(res);
      }, alert("Character Renamed"));
  }

  deleteCharacter(real_name) {
    let URL = `https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com/name/${real_name}`;

    axios
      .delete(URL, {
        //       headers: {
        //  /*        "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/",
        //       }, */
      })
      .then((res) => {
        console.log(res);
      }, window.alert(`Character ${real_name} deleted from Database`));
  }

  changeHandles = (e) => {
    this.setState({ data: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.data.length >= 1) {
      this.editCharacter(this.state.character[0].real_name, this.state.data);
    }
  };

  render() {
    let singlecharacter = this.state.character.map((character) => {
      if (character !== null && character.real_name !== "NA") {
        return (
          <div className="singleComponent">
            <div
              className="characterCharacterBox"
              key={this.state.character[0]._id}
            >
              {" "}
              <div className="characterNameBox">
                <h5 className="name">{this.state.character[0].real_name}</h5>
                <h5>
                  {this.state.character[0].species !== "NA" && "Species: "}

                  {this.state.character[0].species !== "NA" &&
                    this.state.character[0].species}
                </h5>
                <h5>
                  {this.state.character[0].title !== "NA" &&
                    this.state.character[0].title !== undefined &&
                    "Title: "}
                  {this.state.character[0].title !== "NA" &&
                    this.state.character[0].title !== undefined &&
                    this.state.character[0].title}
                </h5>
                <h5>
                  {this.state.character[0].gender !== "NA" &&
                    this.state.character[0].gender !== undefined &&
                    "Gender: "}
                  {this.state.character[0].gender !== "NA" &&
                    this.state.character[0].gender !== undefined &&
                    this.state.character[0].gender}
                </h5>
                <h5>
                  {this.state.character[0].status !== "NA" &&
                    this.state.character[0].status !== undefined &&
                    "Status: "}
                  {this.state.character[0].status !== "NA" &&
                    this.state.character[0].status !== undefined &&
                    this.state.character[0].status}
                </h5>
                <h5>
                  {this.state.character[0].category !== "NA" &&
                    this.state.character[0].category !== undefined &&
                    "Category: "}
                  {this.state.character[0].category !== "NA" &&
                    this.state.character[0].category !== undefined &&
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
                    this.state.character[0].citizenship !== undefined &&
                    "Citizenship: "}
                  {this.state.character[0].citizenship !== "NA" &&
                    this.state.character[0].citizenship !== undefined &&
                    this.state.character[0].citizenship}
                </h5>
                <h5>
                  {this.state.character[0].clearance !== "NA" &&
                    this.state.character[0].clearance !== undefined &&
                    "Clearance: "}
                  {this.state.character[0].clearance !== "NA" &&
                    this.state.character[0].clearance !== undefined &&
                    this.state.character[0].clearance}
                </h5>
                <h5>
                  {this.state.character[0].comic !== "NA" &&
                    this.state.character[0].comic !== undefined &&
                    "Comic: "}
                  {this.state.character[0].comic !== "NA" &&
                    this.state.character[0].comic !== undefined &&
                    this.state.character[0].comic}
                </h5>
                <h5>
                  {this.state.character[0].date_of_birth !== "NA" &&
                    this.state.character[0].date_of_birth !== undefined &&
                    "Date of birth: "}
                  {this.state.character[0].date_of_birth !== "NA" &&
                    this.state.character[0].date_of_birth !== undefined &&
                    this.state.character[0].date_of_birth}
                </h5>
                <h5>
                  {this.state.character[0].date_of_death !== "NA" &&
                    this.state.character[0].tidate_of_deathtle !== undefined &&
                    "Date of death: "}
                  {this.state.character[0].date_of_death !== "NA" &&
                    this.state.character[0].date_of_death !== undefined &&
                    this.state.character[0].date_of_death}
                </h5>

                <h5>
                  {this.state.character[0].alias !== "NA" &&
                    this.state.character[0].alias !== undefined &&
                    "Alias: "}
                  {this.state.character[0].alias !== "NA" &&
                    this.state.character[0].alias !== undefined &&
                    this.state.character[0].alias}
                </h5>
                <h5>
                  {this.state.character[0].game !== "NA" &&
                    this.state.character[0].game !== undefined &&
                    "Game: "}
                  {this.state.character[0].game !== "NA" &&
                    this.state.character[0].game !== undefined &&
                    this.state.character[0].game}
                </h5>

                <h5>
                  {this.state.character[0].movie !== "NA" &&
                    this.state.character[0].movie !== undefined &&
                    "Movie: "}
                  {this.state.character[0].movie !== "NA" &&
                    this.state.character[0].movie !== undefined &&
                    this.state.character[0].movie}
                </h5>
                <h5>
                  {this.state.character[0].one_shot !== "NA" &&
                    this.state.character[0].one_shot !== undefined &&
                    "One shot: "}
                  {this.state.character[0].one_shot !== "NA" &&
                    this.state.character[0].one_shot !== undefined &&
                    this.state.character[0].one_shot}
                </h5>
                <h5>
                  {this.state.character[0].portrayed_by !== "NA" &&
                    this.state.character[0].portrayed_by !== undefined &&
                    "Portrayed by: "}
                  {this.state.character[0].portrayed_by !== "NA" &&
                    this.state.character[0].portrayed_by !== undefined &&
                    this.state.character[0].portrayed_by}
                </h5>
                <h5>
                  {this.state.character[0].tv_series !== "NA" &&
                    this.state.character[0].tv_series !== undefined &&
                    "TV Series: "}
                  {this.state.character[0].tv_series !== "NA" &&
                    this.state.character[0].tv_series !== undefined &&
                    this.state.character[0].tv_series}
                </h5>
                <h5>
                  {this.state.character[0].voiced_by !== "NA" &&
                    this.state.character[0].voiced_by !== undefined &&
                    "Voiced by: "}
                  {this.state.character[0].voiced_by !== "NA" &&
                    this.state.character[0].voiced_by !== undefined &&
                    this.state.character[0].voiced_by}
                </h5>
                <h5 className="bottomH5">
                  {this.state.character[0].web_series !== "NA" &&
                    this.state.character[0].web_series !== undefined &&
                    "Web series: "}
                  {this.state.character[0].web_series !== "NA" &&
                    this.state.character[0].web_series !== undefined &&
                    this.state.character[0].web_series}
                </h5>
              </div>{" "}
            </div>
            <div className="bottomButtons">
              <h3
                className="deleteButton"
                onClick={() =>
                  this.deleteCharacter(this.state.character[0].real_name)
                }
              >
                DELETE CHARACTER
              </h3>{" "}
            </div>
            <div className="renameForm">
              <form onSubmit={this.submitHandler}>
                <div className="editName">
                  <input
                    type="text"
                    name="name"
                    placeholder="  New Character Name"
                    onChange={this.changeHandles}
                  />
                </div>
              </form>
              <h3
                className="editButton"
                onClick={() =>
                  this.editCharacter(
                    this.state.character[0].real_name,
                    this.state.data
                  )
                }
              >
                RENAME CHARACTER
              </h3>
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
