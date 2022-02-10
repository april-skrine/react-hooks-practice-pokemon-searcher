import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( {addNewPokemonToArray} ) {

  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontImg, setFrontImg] = useState('')
  const [backImg, setBackImg] = useState('')

  const makeNewPokemon = (e) => {
    e.preventDefault()
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImg,
        back: backImg
      }
    }
    addNewPokemonToArray(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={makeNewPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e)=> setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e)=> setHp(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={(e)=> setFrontImg(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={(e)=> setBackImg(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
