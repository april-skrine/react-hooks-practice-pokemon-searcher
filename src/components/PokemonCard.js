import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {poke} ) {

const [cardSide, setCardSide] = useState(true)

const toggleSide = () => setCardSide(!cardSide)

  return (
    <Card>
      <div onClick={toggleSide}>
        <div className="image">
          {cardSide ? (
            <img src={poke.sprites.front} alt={poke.name}/>
          ) : (<img src={poke.sprites.back} alt={poke.name}/>)}
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
