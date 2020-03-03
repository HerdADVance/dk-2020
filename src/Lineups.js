import React from "react";

const Lineups = (props) => {

	return (
		<div className="list">
			<p>{props.a}</p>
		</div>
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