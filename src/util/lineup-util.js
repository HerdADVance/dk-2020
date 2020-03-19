const FindPositionIds = (position) => {
	switch(position){
		case 'QB':
			return [0,7]
			break
		case 'RB':
			return [1,2,6,7]
			break
		case 'WR':
			return [3,4,5,6,7]
			break
	}
}

export default FindPositionIds