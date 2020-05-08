import axios from "axios";

export function createCharacter(data) {
  axios
    .post(
      `https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com`,
      { Name: data.real_name, Species: data.species, Alias: data.alias },
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

export function updateCharacter(real_name, data) {
  if (data.length >= 1) {
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://scott-mcu-api.herokuapp.com/name/${real_name}`,
        { Character: data },
        {
          headers: {
            "Access-Control-Allow-Origin":
              "dakom1-crud-api.herokuapp.com/lists",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
    window.setTimeout(function () {
      window.location.reload(false);
    }, 500);
  }
}
