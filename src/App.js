import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import Players from './Players';
import Lineups from './Lineups';

import PLAYERS from './data/PLAYERS';

const App = () => {

  const [players, setPlayers] = useState(PLAYERS);
  const [lineups, setLineups] = useState([]);
  const [slots, setSlots] = useState([]);

  function inc(){
    //setOne(7);
  }

  return (
    players.map(player => {
      return(
        <h1 key={player.ID}>{player.Name}</h1>
      )
    })
  )

};

ReactDOM.render(<App />, document.getElementById("root"));