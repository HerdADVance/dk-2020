import React, { useState } from "react";

import ClickedPlayer from './ClickedPlayer'

const Player = props => {

	const { id, filtered, name, position, salary, team, handlePlayerClick, clickedPlayer } = props;

	if(filtered){

		return (
			<>
			<tr 
				key={id}
				onClick={() => handlePlayerClick(id)}
			>
				<td className="position">{position}</td>
				<td className="name">{name}</td>
				<td className={team + " team"}>{team}</td>
				<td className="team">{salary}</td>
				<td className="team"></td>
			</tr>
			
			{clickedPlayer === id? <tr><ClickedPlayer/></tr> : ''}
			</>

			
		);

	} else return null

};


export default Player;