import React, { Component } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Create.css";
import Button from "@material-ui/core/Button";
import { createCharacter } from "./api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      color: "primary",
    },
  },
}));

export default function CharacterForm() {
  const classes = useStyles();

  const [real_name, setName] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [alias, setAlias] = React.useState("");
  const valueUpdateMap = {
    real_name: setName,
    species: setSpecies,
    alias: setAlias,
  };
  const updateText = (event, type) => {
    event.persist();
    const value = event.target.value;
    valueUpdateMap[type](value);
  };

  const newCharacter = () => {
    createCharacter({ real_name, species, alias });
  };

  return (
    <div className="CreateBoxes">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="createField">
          <div className="createInput">
            <h3 className="createCharacter">Create New Character</h3>
            <TextField
              className="createTextField1"
              onKeyUp={(event) => updateText(event, "real_name")}
              label="Name"
              variant="standard"
            />
          </div>{" "}
          <div className="createInput">
            <TextField
              className="createTextField2"
              label="Species"
              variant="standard"
              onKeyUp={(event) => updateText(event, "species")}
            />
          </div>
          <div className="createInput">
            <TextField
              className="createTextField3"
              label="Alias"
              variant="standard"
              onKeyUp={(event) => updateText(event, "alias")}
            />
          </div>
        </div>
        <Button
          onClick={newCharacter}
          className="submitButton"
          variant="contained"
          color="secondary"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
