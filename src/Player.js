import React, { useState } from "react";

const Player = props => {

	const { id, name, position, salary, team } = props;

	return (
		<tr>
			<td className="position">{position}</td>
			<td className="name">{name}</td>
			<td className={team + " team"}>{team}</td>
			<td className="team">{salary}</td>
			<td className="team"></td>
		</tr>
	);

};


export default Player;