import React, { useState } from "react";

import slateInfo from './data/slateInfo'

const Lineups = (props) => {

	const [lineups, setLineups] = useState(createLineups(20));


	function createLineup(id){
		let lineup = {
		  id: id,
		  salary: 50000,
		  roster: slateInfo.classic.CFB.roster,
		  positions: ["QB", "RB", "WR", "FX", "ALL"]
		}
		return lineup;
	}

	function createLineups(num){
		let id = 1
		let lineups = []
		while(id <= num){
		  lineups.push(createLineup(id))
		  id ++
		}
		return lineups
	}


	return (
		lineups.map(lineup => {
			return(
				<h1>{lineup.id}</h1>
			)
		})
	);

	

};

// const Lineups = () => {
//   return (
//     <div className="lineups">
// 		<div className="lineups-wrap">
// 			<h1>Lineups</h1>
// 			{lineups.map((lineupId, index) => (
// 	    		<LineupContainer key={lineupId} lineupId={lineupId} index={index + 1} />
// 	  		))}
// 		</div>
// 	</div>
//   );
// };

export default Lineups;