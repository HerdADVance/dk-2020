import React, { useEffect, useState } from "react";

import find from 'lodash/find'
import PLAYERS from './data/PLAYERS'

const Slot = (props) => {

	const { position, handleSlotClick, player } = props

	const [playerTeam, setPlayerTeam] = useState()
	const [playerName, setPlayerName] = useState()
	const [playerSalary, setPlayerSalary] = useState()

	useEffect(() => {

		let foundPlayer = find(PLAYERS, ['ID', player]);
		
		setPlayerTeam(foundPlayer.TeamAbbrev)
		setPlayerName(foundPlayer.Name)
		setPlayerSalary(foundPlayer.Salary)
	
	}, [player]);

	return (
		<>
		<tr 
			onClick={() => handleSlotClick(position)}
		>
			
			<td>{position}</td>

			{player?
				<>
				<td>{playerTeam}</td>
				<td>{playerName}</td>
				<td>{playerSalary}</td>
				</>
			:
				<>
				<td></td>
				<td></td>
				<td></td>
				</>
			}

		</tr>
		</>
	);

	

};

export default Slot;