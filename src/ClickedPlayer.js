import React, { useState } from "react";

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const ClickedPlayer = props => {

	const { id, name, position, numLineups, addPlayerToLineups } = props

	const [sliderValue, setSliderValue] = useState(0)
	const [random, setRandom] = useState(false)


	// EVENTS 
	function handleRandomCheckboxClick(){
		setRandom(!random)
	}
	function handleSliderButtonClick(sliderValue){
		addPlayerToLineups(id, position, sliderValue, random)
	}

	function handleSliderChange(value){
		setSliderValue(value)
	}


	// JSX
	return(
		<td colSpan="5">
			<p>{name} is in {0} of {numLineups} lineups.</p>
			<Slider 
				min={0} 
				max={numLineups} 
				defaultValue={0}
				value={sliderValue}
				onChange={handleSliderChange}
			/>
			<button
				onClick={() => handleSliderButtonClick(sliderValue)}
			>
				Add {name} to {sliderValue} lineups
			</button>

			<div>
				<label>Random:</label>
				<input
					type="checkbox"
					onChange={handleRandomCheckboxClick}
				/>
			</div>
		</td>
	)

};


export default ClickedPlayer;