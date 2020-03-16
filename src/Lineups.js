import React, { useState } from "react";

import slateInfo from './data/slateInfo'

import Lineup from './Lineup'

const Lineups = (props) => {

	const{ lineups, handleSlotClick } = props

	return (
		lineups.map(lineup => {
			return(
				<Lineup
					key={lineup.id}
					id={lineup.id}
					roster={lineup.roster}
					handleSlotClick={handleSlotClick}
				/>
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