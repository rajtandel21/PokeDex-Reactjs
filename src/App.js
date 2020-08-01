import React from "react";
import AllPokemon from "./AllPokemon";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PokeDex</h1>
        <AllPokemon />
      </header>
    </div>
  );
}

export default App;
