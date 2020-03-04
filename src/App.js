import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import Players from './Players'
import Lineups from './Lineups'

import slateInfo from './data/slateInfo'

const App = () => {

  const positions = slateInfo.classic.CFB.positions
  
  return (
    <div className="wrapper">
      <div className="list">
        <div>
          <ul className="sort-players sort-positions clickable">
            {positions.map((position) => (
                <li
                  key={position}
                >
                {position}
                </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="sort-players sort-games clickable"></ul>
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