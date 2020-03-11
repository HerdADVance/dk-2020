import React, { useState, useEffect } from "react";

import Players from './Players'
import Lineups from './Lineups'

const Init = props => {

  const { handleInitClick } = props

  const [numLineups, setNumLineups] = useState(0)
  
  // JSX 
  return (
    <div className="init overlay">
      <div className="init-info">
        <label htmlFor="numLineups">Lineups:</label>
        <input type="text" name="numLineups" onChange={e => setNumLineups(e.target.value)}/>
        <button onClick={() => handleInitClick(numLineups)}>Let's get started</button>
      </div>
    </div>
  )

};

export default Init