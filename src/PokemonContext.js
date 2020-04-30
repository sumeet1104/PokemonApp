import React, { createContext, useReducer } from "react";
import { pokemonReducer } from "./PokemonReducer";

const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  //Removed for adding Reducer
  // const [pokemons, setPokemons] = useState([
  //   { id: 1, name: "Bulbasaur" },
  //   { id: 2, name: "Charmander" },
  //   { id: 3, name: "Pikachu" },
  // ]);

  // const [capturedPokemons, setCapturedPokemons] = useState([]);

  const defaultState = {
    pokemons: [
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Charmander" },
      { id: 3, name: "Squirtle" },
    ],
    capturedPokemons: [],
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  console.log(state);

  const capture = (pokemon) => () => {
    dispatch({
      type: "CAPTURE",
      pokemon,
    });
  };

  const release = (pokemon) => () => {
    dispatch({
      type: "RELEASE",
      pokemon,
    });
  };

  const addPokemon = (pokemon) => {
    dispatch({
      type: "ADDPOKEMON",
      pokemon,
    });
  };

  const addPokemons = (pokemons) => {
    dispatch({
      type: "ADDPOKEMONS",
      pokemons,
    });
  };

  const { pokemons, capturedPokemons } = state;

  const providerValue = {
    state,
    pokemons,
    release,
    capturedPokemons,
    capture,
    addPokemon,
    addPokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
