import React, { useState } from "react";

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const ClickedPlayer = props => {

	const { name } = props

	function handleSliderButtonClick(){
		console.log("clicked slider button")
	}

	function handleSliderChange(){
		console.log("changing slider")
	}

	return(
		<td colSpan="5">
			<p>{name} is in {0} of {100} lineups.</p>
			<Slider 
				min={0} 
				max={100} 
				defaultValue={0}
				value={0}
				onChange={() => handleSliderChange()}
			/>
			<button
				onClick={() => handleSliderButtonClick()}
			>
				Add {name} to {100} lineups
			</button>
		</td>
	)

};


export default ClickedPlayer;