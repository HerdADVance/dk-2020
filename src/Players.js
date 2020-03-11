import React, { useState, useEffect } from "react";

import includes from 'lodash/includes';
import forEach from 'lodash/forEach';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

import PLAYERS from './data/PLAYERS';
import slateInfo from './data/slateInfo'

import Player from './Player'



const Players = (props) => {

	const { numLineups } = props

	const [players, setPlayers] = useState(PLAYERS);

	const POSITIONS = slateInfo.classic.CFB.positions
  	const ROSTER = slateInfo.classic.CFB.roster
  	const [TEAMS, setTEAMS] = useState([])

  	const [clickedPosition, setClickedPosition] = useState('ALL')
  	const [filteredPositions, setFilteredPositions] = useState(['QB', 'RB', 'WR'])
  	const [clickedTeam, setClickedTeam] = useState('ALL')
  	const [filteredTeams, setFilteredTeams] = useState(TEAMS)

  	const [clickedPlayer, setClickedPlayer] = useState(null)



  	// RUN ONCE ON LOAD
	useEffect(() => {
		console.log("Affecting")

		let teams = getTeams()
		setTEAMS(teams)
		setFilteredTeams(teams)
	
	}, []);



	// FUNCTIONS
	function filterPlayers(positions, teams){
		
		let copy = [...players]

		copy = forEach(copy, function(player){
	     	if(includes(positions, player.Position) && includes(teams, player.TeamAbbrev)) player.Filtered = true
	     		else player.Filtered = false
	    });

	    return copy
	}

	// Filter by position(s)
	function filterByPositions(position){
		let filteredPositions = []
	    switch(position){
	    	case 'ALL':
	      		filteredPositions = POSITIONS
	      		break;
	    	default:
	      		let foundAcceptedPosition = ROSTER.filter(function (spot) {
	        		return spot.position === position
	      		});
	      		filteredPositions = foundAcceptedPosition[0].accepts;
	    		break;
	   	}
	   	return filteredPositions
	}

	// Filter by team(s)
	function filterByTeams(team){
		let filteredTeams = []
		switch(team){
	    	case 'ALL':
	      		filteredTeams = TEAMS
	      		break;

	    	default:
	      		filteredTeams = [team]
	      		break;
	   	}
	   	return filteredTeams
	}

	// Get teams on load
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
	function handlePlayerClick(pid){
		setClickedPlayer(pid)
	}

  	function handlePositionClick(position){
  
  		// Update selected box
    	setClickedPosition(position)
    	
    	// Update filtered positions
    	let positionsToFilter = filterByPositions(position)
    	setFilteredPositions(positionsToFilter)

    	// Filter players
    	let filteredPlayers = filterPlayers(positionsToFilter, filteredTeams)
    	setPlayers(filteredPlayers)
  	}

  	function handleTeamClick(team){
    	
  		// Update selected team
    	setClickedTeam(team)

    	let teamsToFilter = filterByTeams(team)
    	setFilteredTeams(teamsToFilter)

    	// Filter players
    	let filteredPlayers = filterPlayers(filteredPositions, teamsToFilter)
    	setPlayers(filteredPlayers)

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
	          		{TEAMS.map((team) => (
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
								handlePlayerClick={handlePlayerClick}
								clickedPlayer={clickedPlayer}
								numLineups={numLineups}
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