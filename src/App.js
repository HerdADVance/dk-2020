import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import Init from './Init'
import Players from './Players'
import Lineups from './Lineups'

const App = () => {

  const [showInit, setShowInit] = useState(true)
  const [numLineups, setNumLineups] = useState(0)

  function handleInitClick(numLineups){
    setShowInit(false)
    setNumLineups(parseInt(numLineups))
  }

  // JSX 
  return (
    <div>

      {showInit? <Init handleInitClick={handleInitClick}/> : '' }

      <div className="wrapper">

        <Players numLineups={numLineups}/>
        
        <div className="lineups">
          <div className="lineups-wrap">
            <Lineups/>
          </div>
        </div>

      </div>

    </div>
  )

};

ReactDOM.render(<App />, document.getElementById("root"));