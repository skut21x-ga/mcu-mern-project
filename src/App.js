import React from "react";
import "./App.css";
import background from "./images/background.jpg";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h3>Marvel Cinematic Universe Character Database</h3>
      </div>
      <div
        className="Content"
        style={{
          backgroundImage: "google",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3>MARVEL!</h3>
      </div>
    </div>
  );
}

export default App;
