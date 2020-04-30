import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";

const CapturedPokemon = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  //   console.log(capturedPokemons);

  // REMOVED WHILE USING REDUCER
  //   const removefromCapturedPokemonList = (removedPokemon) =>
  //     capturedPokemons.filter((pokemon) => pokemon !== removedPokemon);

  //   const release = (pokemon) => () => {
  //     setCapturedPokemons(removefromCapturedPokemonList(pokemon));
  //     setPokemons([...pokemons, pokemon]);
  //   };

  return (
    <div className="pokedex">
      <h2>Captured Pokemon</h2>
      {console.log(capturedPokemons)}
      {capturedPokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}> - </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CapturedPokemon;
