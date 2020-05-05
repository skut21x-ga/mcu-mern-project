import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { character: [] };
  }

  createCharacter(data) {
    axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com`,
        { Name: data.real_name, Gender: data.gender, Species: data.species },
        {
          headers: {
            "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
    alert("New Character Created in Database");
  }
  render() {
    return (
      <div>
        <button>
          <h5 onClick={this.createCharacter}>Create Character Here!</h5>
        </button>
      </div>
    );
  }
}

export default Create;
