import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import {createLineup, createLineups} from './util/lineups-create'
import FindPositionIds from './util/lineup-util'

import shuffle from 'lodash/shuffle'
import includes from 'lodash/includes'
import forEach from 'lodash/forEach'
import orderBy from 'lodash/orderBy'

import Init from './Init'
import Players from './Players'
import Lineups from './Lineups'

const App = () => {

  const [showInit, setShowInit] = useState(true)
  const [numLineups, setNumLineups] = useState(0)

  const [lineups, setLineups] = useState([])

  
  // FUNCTIONS
  function addPlayerToLineups(pid, position, numToAdd, random){

    // Copy and shuffle if need be
    let copyLineups = lineups
    if(random) copyLineups = shuffle(copyLineups)

    // Round up appropriate slot ID's for position
    let positionIds = FindPositionIds(position)

    // Looping through lineups to see if eligible to add player
    let willAddTo = {}
    let lineupsAddedTo = []
    
    for(var i = 0; i < copyLineups.length; i++){

      let lineup = copyLineups[i];
      
      for(var j = 0; j < positionIds.length; j++){
        
        let slotId = positionIds[j]
        let slot = lineup.roster[slotId]

        if(!slot.player){
          let lineupId = lineup.id
          willAddTo[lineupId] = slotId
          lineupsAddedTo.push(lineupId)
          break
        }
      }

      if(lineupsAddedTo.length == numToAdd) break
    }

    copyLineups = orderBy(copyLineups, ['id'],['asc'])

    let updatedLineups = copyLineups.map(el => (includes(lineupsAddedTo, el.id) ? 
      {
        ...el, 
        roster: [...el.roster].map(slot => (slot.id == willAddTo[el.id] ?

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


  function handleInitClick(numLineups){
    setShowInit(false)
    setNumLineups(parseInt(numLineups))
    let createdLineups = createLineups(numLineups)
    setLineups(createdLineups)
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