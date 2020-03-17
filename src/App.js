import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import slateInfo from './data/slateInfo'

import shuffle from 'lodash/shuffle'
import includes from 'lodash/includes'

import Init from './Init'
import Players from './Players'
import Lineups from './Lineups'

const App = () => {

  const [showInit, setShowInit] = useState(true)
  const [numLineups, setNumLineups] = useState(0)

  const [lineups, setLineups] = useState([])

  
  // FUNCTIONS
  function addPlayerToLineups(pid, toAdd){

    //let copyLineups = shuffle(lineups)
    let copyLineups = lineups
    console.log(copyLineups)

    console.log(lineups[0].roster[0].player)
    console.log(lineups[1].roster[0].player)

    let included = [2,4,5]

    let updatedLineups = copyLineups.map(el => (includes(included, el.id) ? 
      {
        ...el, 
        roster: [...el.roster].map(slot => (slot.id ==1 ?

        {
          ...slot,
          player: pid
        }
        :
          slot
        ))
      } 
      : 
        el
    ))

    setLineups(updatedLineups)
  }

  function isSlotOpen(lid, sid){

  }

  function createLineup(id){
    let lineup = {
      id: id,
      salary: slateInfo.classic.CFB.salary,
      roster: slateInfo.classic.CFB.roster,
      positions: slateInfo.classic.CFB.positions
    }
    return lineup;
  }

  function createLineups(num){
    let lid = 1
    let createdLineups = []
    while(lid <= num){
      createdLineups.push(createLineup(lid))
      lid ++
    }
    setLineups(createdLineups)
  }

  function handleInitClick(numLineups){
    setShowInit(false)
    setNumLineups(parseInt(numLineups))
    createLineups(numLineups)
  }

  function handleSlotClick(position){
    console.log(position)
  }


  // JSX 
  return (
    <div>

      {showInit? <Init handleInitClick={handleInitClick}/> : '' }

      <div className="wrapper">

        <Players 
          numLineups={numLineups}
          addPlayerToLineups={addPlayerToLineups}
        />
        
        <div className="lineups">
          <div className="lineups-wrap">
            <Lineups
              lineups={lineups}
              handleSlotClick={handleSlotClick}
            />
          </div>
        </div>

      </div>

    </div>
  )

};

ReactDOM.render(<App />, document.getElementById("root"));