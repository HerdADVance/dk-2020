import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";

import GlobalContext from './GlobalContext';

import Players from './Players';
import Lineups from './Lineups';
import Test from './Test';
import Other from './Other';

const App = () => {

  const options = useState({
  	a: 1,
  	b: 2,
  	c: 3
  })

  return (
  	<GlobalContext.Provider value={options}>
      <Test/>
      <Other/>
    </GlobalContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));