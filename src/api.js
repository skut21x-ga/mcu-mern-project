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
