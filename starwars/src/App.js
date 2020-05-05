import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      setState(response.data.results);
      console.log(response.data.results);
    });
  }, []);
  return (
    <div className="App">
      <h1> Characters</h1>
      <img src={state.url} />
    </div>
  );
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
};

export default App;
