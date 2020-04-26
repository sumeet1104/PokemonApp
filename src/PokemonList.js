import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";

const PokemonList = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);
  console.log(pokemons);

  const removefromPokemonList = (removedPokemon) =>
    pokemons.filter((pokemon) => pokemon !== removedPokemon);

  const capture = (pokemon) => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemons(removefromPokemonList(pokemon));
  };

  return (
    <div className="pokemon-list">
      <h2>Pokemon Lists</h2>

      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={capture(pokemon)}> + </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PokemonList;
