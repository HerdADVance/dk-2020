import React, { useState } from "react";

import ClickedPlayer from './ClickedPlayer'

const Player = props => {

	const { id, filtered, name, position, salary, team, handlePlayerClick, clickedPlayer, numLineups, addPlayerToLineups } = props;

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
			
			{clickedPlayer === id? 
				<tr>
					<ClickedPlayer
						id={id}
						name={name}
						position={position}
						numLineups={numLineups}
						addPlayerToLineups={addPlayerToLineups}
					/>
				</tr>
			:
				''
			}

			</>
			
		);

	} else return null

};


export default Player;