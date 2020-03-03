import React from "react";

const Players = (props) => {

	function handleClick(){

	}

	return (
		<div className="list">
			<p>{props.a}</p>
			<button onClick={props.inc}>Click me</button>
		</div>
	);

};

// const Players = () => {
//   return (
//    	<div className="list">
// 		<div>
// 			<ul className="sort-players sort-positions clickable">
// 				{slateInfo.classic.CFB.positions.map(position => (
// 					<li 
// 						class={position === clickedPosition? 'selected' : ''}
// 						key={position}
// 						onClick={() => handlePositionClick(position)}
// 					>
// 					{position}
// 					</li>
// 				))}
// 			</ul>
// 		</div>

// 		<div>
// 			<ul className="sort-players sort-games clickable">
// 				{teams.map(team => (
// 					<li 
// 						class={team === clickedTeam? 'selected' : ''}
// 						key={team}
// 						onClick={() => handleTeamClick(team)}
// 					>
// 					{team}
// 					</li>
// 				))}
// 			</ul>
// 		</div>

// 		<div className="players-wrap">
// 			<table className="players">
// 				<tbody>
// 					{/* filter here */}
// 					{filteredPlayers.map(playerId => (
// 		    			<PlayerContainer key={playerId} playerId={playerId} />
// 		  			))}
// 		  		</tbody>
// 		  	</table>
// 		</div>
// 	</div>
//   );
// };

export default Players;