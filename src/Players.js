import React, { useState, useEffect } from "react";

import includes from 'lodash/includes';
import forEach from 'lodash/forEach';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

import PLAYERS from './data/PLAYERS';
import slateInfo from './data/slateInfo'

import Player from './Player'



const Players = (props) => {

	const [players, setPlayers] = useState(PLAYERS);

	const POSITIONS = slateInfo.classic.CFB.positions
  	const ROSTER = slateInfo.classic.CFB.roster

  	const [teams, setTeams] = useState([])

  	const [clickedPosition, setClickedPosition] = useState('ALL')
  	const [clickedTeam, setClickedTeam] = useState('ALL')



  	// RUN ONCE ON LOAD
	useEffect(() => {
		console.log("Affecting")

		let teams = getTeams()
		setTeams(teams)
	
	}, []);



	// FUNCTIONS
	function filterPlayers(positions, teams){
		
		let copy = [...players]

		copy = forEach(copy, function(player){
	     	if(includes(positions, player.Position)) player.Filtered = true
	     		else player.Filtered = false
	    });

	    return copy
	}

	function filterByPosition(clickedPosition){

		let filteredPositions = []
	    
	    switch(clickedPosition){
	    	case 'ALL':
	      		filteredPositions = POSITIONS
	      		break;

	    	default:
	      		let foundAcceptedPosition = ROSTER.filter(function (spot) {
	        		return spot.position === clickedPosition
	      		});

	      		filteredPositions = foundAcceptedPosition[0].accepts;
	    		break;
	   	}

	   	return filteredPositions
	}

	function getTeams(){
		let sortedGames = [];

		forEach(PLAYERS, function(player){
		  let game = {};
		  let info = player['Game Info'];
		  game['away'] = info.substr(0, info.indexOf('@'));

		  info = info.substring(info.indexOf("@") + 1);
		  game['home'] = info.substr(0, info.indexOf(' '));

		  info = info.substring(info.indexOf(" ") + 1);
		  info = info.substring(info.indexOf(" ") + 1);
		  info = info.substring(0, info.indexOf(' '));
		  info = info.slice(0, -2); 
		  game['time'] = info

		  sortedGames.push(game);
		});

		sortedGames = uniqBy(sortedGames, 'away');
		sortedGames = orderBy(sortedGames, ['time'],['asc'])

		let sortedTeams = []
		forEach(sortedGames, function(game){
		  sortedTeams.push(game.away)
		  sortedTeams.push(game.home)
		})

		sortedTeams.push("ALL");
		return sortedTeams
	}


	// CLICK EVENTS
  	function handlePositionClick(position){
  
  		// Update selected box
    	setClickedPosition(position)
    	
    	// Filter players
    	let positionsToFilter = filterByPosition(position)
    	let filteredPlayers = filterPlayers(positionsToFilter)
    	setPlayers(filteredPlayers)
  	}

  	function handleTeamClick(team){
    	setClickedTeam(team)
  	}


  	// JSX
	return (

		<div className="list">
	        <div>
	        	<ul className="sort-players sort-positions clickable">
	            	{POSITIONS.map((position) => (
	                	<li
	                  	key={position}
	                  	className={position === clickedPosition? 'selected' : ''}
	                  	onClick={() => handlePositionClick(position)}
	                	>
	                	{position}
	                	</li>
	            	))}
	          	</ul>
	        </div>

	        <div>
	        	<ul className="sort-players sort-games clickable">
	          		{teams.map((team) => (
	                	<li
	                  	key={team}
	                  	className={team === clickedTeam? 'selected' : ''}
	                  	onClick={() => handleTeamClick(team)}
	                	>
	                	{team}
	                	</li>
	            	))}
	          	</ul>
	        </div>

	        <div className="players-wrap">
	         	<table className="players clickable">
	         		<thead>
		            	<tr className="players-headers">
		              		<th>Pos</th>
		              		<th>Name</th>
		              		<th>Team</th>
		              		<th>Sal</th>
		              		<th>Own</th>
		            	</tr>
		            </thead>
	            
	            	<tbody>
		            	{players.map((player) => (
							<Player
								key={player.ID}
								id={player.ID}
								filtered={player.Filtered}
								name={player.Name}
								position={player.Position}
								salary={player.Salary}
								team={player.TeamAbbrev}
							/>
						))}
					</tbody>
	        
	          	</table>
	        </div>
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