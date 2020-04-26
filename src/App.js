import React from "react";
import "./App.css";
import PokemonList from "./PokemonList";
import CapturedPokemon from "./CapturedPokemon";
import { PokemonProvider } from "./PokemonContext";
import PokemonForm from "./NewPokemonForm";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemon />
        <PokemonForm />
      </div>
    </PokemonProvider>
  );
}

export default App;
