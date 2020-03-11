import React, { useState } from "react";

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const ClickedPlayer = props => {

	const { name, numLineups } = props

	const [sliderValue, setSliderValue] = useState(0)

	function handleSliderButtonClick(){
		console.log("clicked slider button")
	}

	function handleSliderChange(value){
		setSliderValue(value)
	}

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
				onClick={() => handleSliderButtonClick()}
			>
				Add {name} to {sliderValue} lineups
			</button>
		</td>
	)

};


export default ClickedPlayer;