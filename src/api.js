import axios from "axios";

export function createCharacter(data) {
  axios
    .post(
      `https://scott-mcu-api.herokuapp.com/`,
      {
        real_name: data.real_name,
        alias: data.alias,
        species: data.species,
        affiliation: data.affiliation,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/",
        },
      }
    )
    .then((res) => {
      console.log(res);
    });
  // alert("New Character Created in Database");
}

export function updateCharacter(real_name, data) {
  if (data.length >= 1) {
    axios
      .put(
        `hhttps://scott-mcu-api.herokuapp.com/name/${real_name}`,
        { Character: data },
        {
          headers: {
            "Access-Control-Allow-Origin": "scott-mcu-api.herokuapp.com/",
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
