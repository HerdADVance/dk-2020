import React, { useState } from "react";

import Slot from './Slot'

const Lineup = (props) => {

	const { id, roster, handleSlotClick } = props

	return (

		<table>
			<thead>
				<tr>
					<td colSpan="4">Lineup # {id}</td>
				</tr>
			</thead>
			<tbody>
		
				{roster.map((slot, index) => (
					
					slot.player?
						
						<Slot
							key={slot.id}
							position={slot.position}
							player={slot.player}
							handleSlotClick={handleSlotClick}
						/>
					:
						<tr><td>{slot.position}</td><td></td><td></td><td></td></tr>
					
				))}

			</tbody>
		</table>
	);

	

};

export default Lineup;