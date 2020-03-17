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

import Init from './Init'
import Players from './Players'
import Lineups from './Lineups'

const App = () => {

  const [showInit, setShowInit] = useState(true)
  const [numLineups, setNumLineups] = useState(0)

  const [lineups, setLineups] = useState([])

  
  // FUNCTIONS
  function addPlayerToLineups(pid, position, numToAdd, random){

    console.log(numToAdd)

    // Copy and shuffle if need be
    let copyLineups = lineups
    if(random) copyLineups = shuffle(copyLineups)

    // Round up appropriate slot ID's for position
    let positionIds = FindPositionIds(position)

    // Looping through lineups to see if eligible to add player
    let willAddTo = []
    let added = 0
    
    forEach(copyLineups, function(lineup){
      
      if(added < numToAdd){
        forEach(lineup.roster, function(slot){
         
          if(includes(positionIds, slot.id) && !slot.player){
            added ++
            willAddTo.push(lineup.id)
          }

        })
      }

    })

    console.log(willAddTo)

    let included = [2,4,5]

    // let updatedLineups = copyLineups.map(el => (includes(included, el.id) ? 
    //   {
    //     ...el, 
    //     roster: [...el.roster].map(slot => (slot.id ==1 ?

    //     {
    //       ...slot,
    //       player: pid
    //     }
    //     :
    //       slot
    //     ))
    //   } 
    //   : 
    //     el
    // ))

    //setLineups(updatedLineups)
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