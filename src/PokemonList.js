import React, { useContext, useEffect } from "react";
import PokemonContext from "./PokemonContext";

const PokemonList = () => {
  const { state, addPokemons, capture } = useContext(PokemonContext);

  //   console.log(pokemons);

  // REMOVED WHILE USING REDUCER
  //   const removefromPokemonList = (removedPokemon) =>
  //     pokemons.filter((pokemon) => pokemon !== removedPokemon);

  //   const capture = (pokemon) => () => {
  //     setCapturedPokemons([...capturedPokemons, pokemon]);
  //     setPokemons(removefromPokemonList(pokemon));
  //   };

  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      addPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-list">
      <h2>Pokemon Lists</h2>
      {console.log(state)}
      {state.pokemons.map((pokemon) => (
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
