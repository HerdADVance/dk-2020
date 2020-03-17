const FindPositionIds = (position) => {
	switch(position){
		case 'QB':
			return [1,8]
			break
		case 'RB':
			return [2,3,7,8]
			break
		case 'WR':
			return [4,5,6,7,8]
			break
	}
}

export default FindPositionIds