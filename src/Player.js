import React, { useState } from "react";

const Player = props => {

	const { id, filtered, name, position, salary, team, handlePlayerClick } = props;

	if(filtered){

		return (
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
		);

	} else return null

};


export default Player;