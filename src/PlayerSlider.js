import React from 'react';

import Slider, { Range } from 'rc-slider';

const PlayerSlider = (numLineups) => {

	console.log(numLineups);

	return(

		<div>
			<Slider min={0} max={numLineups}/>
		</div>

	);

};

export default PlayerSlider;