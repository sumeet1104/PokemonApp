const CAPTURE = "CAPTURE";
const RELEASE = "RELEASE";
const ADDPOKEMON = "ADDPOKEMON";
const ADDPOKEMONS = "ADDPOKEMONS";

const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

const releasePokemon = (state, pokemon) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, pokemon),
});

const getPokemonList = (pokemons, capturedPokemon) =>
  pokemons.filter((pokemon) => pokemon !== capturedPokemon);

const capturePokemon = (state, pokemon) => ({
  pokemons: getPokemonList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
});

const addPokemon = (state, pokemon) => ({
  ...state,
  pokemons: [...state.pokemons, pokemon],
});

const addPokemons = (state, pokemons) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons,
});

export const pokemonReducer = (state, action) => {
  console.log(state, action);
  console.log(state.capturedPokemons, state.pokemons);
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(state, action.pokemon);
    case RELEASE:
      return releasePokemon(state, action.pokemon);
    case ADDPOKEMON:
      return addPokemon(state, action.pokemon);
    case ADDPOKEMONS:
      return addPokemons(state, action.pokemons);
    default:
      return state;
  }
};
