import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import Players from './Players'
import Lineups from './Lineups'

const App = () => {
  
  // JSX 
  return (
    <div className="wrapper">

      <Players/>
      
      <div className="lineups">
        <div className="lineups-wrap">
          
        </div>
      </div>

    </div>
  )

};

ReactDOM.render(<App />, document.getElementById("root"));