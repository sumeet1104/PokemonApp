import React, { useContext, useState } from "react";
import PokemonContext from "./PokemonContext";

const PokemonForm = () => {
  const { addPokemon } = useContext(PokemonContext);

  const [pokemonName, setPokemonName] = useState("");

  const changeHandler = (event) => setPokemonName(event.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const payload = { id: generateID(), name: pokemonName };
    addPokemon(payload);
    console.log("Form Submitted");
    console.log(payload);
    setPokemonName("");
  };

  const generateID = () => {
    const a = Math.random().toString(36).substring(2, 15);

    const b = Math.random().toString(36).substring(2, 15);

    return a + b;
  };

  return (
    <div className="pokemon-form">
      <h2>Pokemon Form</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label for="inputPokemon">Pokemon</label>
          <input
            type="text"
            id="inputPokemon"
            className="form-control"
            placeholder="Enter Pokemon Name"
            value={pokemonName}
            onChange={changeHandler}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default PokemonForm;
