import React, { useState, useEffect } from "react";

import Players from './Players'
import Lineups from './Lineups'

const Init = props => {

  const { handleInitClick } = props

  const [numLineups, setNumLineups] = useState(10)
  
  // JSX 
  return (
    <div className="init overlay">
      <div className="init-info">
        <label htmlFor="numLineups">Lineups:</label>
        <input type="text" name="numLineups" defaultValue={numLineups} onChange={e => setNumLineups(e.target.value)}/>
        <button onClick={() => handleInitClick(numLineups)}>Let's get started</button>
      </div>
    </div>
  )

};

export default Init