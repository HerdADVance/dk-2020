import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import Players from './Players'
import Lineups from './Lineups'

import slateInfo from './data/slateInfo'

const App = () => {

  const POSITIONS = slateInfo.classic.CFB.positions
  const ROSTER = slateInfo.classic.CFB.roster

  const [teams, setTeams] = useState([])

  const [clickedPosition, setClickedPosition] = useState('ALL')
  const [clickedTeam, setClickedTeam] = useState('ALL')

  // Get teams on init
  useEffect(() => {
    console.log("Affecting")
    setTeams(['KSU', 'NAVY', 'UT', 'UTAH', 'ALL'])
  }, []);


  function filterByPosition(){
    switch(clickedPosition){
    case 'ALL':
      filteredPositions = slateInfo.classic.CFB.positions
      break;

    default:
      let foundAcceptedPosition = slateInfo.classic.CFB.roster.filter(function (spot) {
        return spot.position === clickedPosition
      });

      filteredPositions = foundAcceptedPosition[0].accepts;
    break;
    }
  }

  function handlePositionClick(position){
    setClickedPosition(position)
  }

  function handleTeamClick(team){
    setClickedTeam(team)
  }
  
  return (
    <div className="wrapper">
      <div className="list">
        <div>
          <ul className="sort-players sort-positions clickable">
            {POSITIONS.map((position) => (
                <li
                  key={position}
                  className={position === clickedPosition? 'selected' : ''}
                  onClick={() => handlePositionClick(position)}
                >
                {position}
                </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="sort-players sort-games clickable">
            {teams.map((team) => (
                <li
                  key={team}
                  className={team === clickedTeam? 'selected' : ''}
                  onClick={() => handleTeamClick(team)}
                >
                {team}
                </li>
            ))}
          </ul>
        </div>

        <div className="players-wrap">
          <table className="players clickable">
            <tr className="players-headers">
              <th>Pos</th>
              <th>Name</th>
              <th>Team</th>
              <th>Sal</th>
              <th>Own</th>
            </tr>
            <Players/>
          </table>
        </div>
      </div>
      <div className="lineups">
        <div className="lineups-wrap">
          <Lineups/>
        </div>
      </div>
    </div>
  )

};

ReactDOM.render(<App />, document.getElementById("root"));