import React, { useState } from "react";
import PLAYERS from './data/PLAYERS';

import Player from './Player'

const Players = (props) => {

	const [players, setPlayers] = useState(PLAYERS);

	function handleClick(){

	}

	return (
		players.map(player => {
			return(
				<Player
					key={player.ID}
					id={player.ID}
					name={player.Name}
					position={player.Position}
					salary={player.Salary}
					team={player.TeamAbbrev}
				/>
			)
		})
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