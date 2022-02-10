import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [pokemon, setPokemon] = useState([])
const [search, setSearch] = useState("")

const newSearch = (e) => setSearch(e.target.value)

const searchedPokemon = pokemon.filter((pokeObj) => {
  if (pokeObj.name.toLowerCase().includes(search.toLowerCase())) {
    return true
  } else {
    return false
  }
})

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(r=>r.json())
  .then(setPokemon)
}, [])

const addNewPokemonToArray = (newPokemon) => {
  fetch('http://localhost:3001/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPokemon)
  })
  setPokemon([newPokemon, ...pokemon])
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemonToArray={addNewPokemonToArray}/>
      <br />
      <Search newSearch={newSearch}/>
      <br />
      <PokemonCollection pokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
