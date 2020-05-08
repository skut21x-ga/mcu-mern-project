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
  alert("New Character Created in Database");
}
