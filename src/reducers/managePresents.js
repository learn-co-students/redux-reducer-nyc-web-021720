{numberOfPresnets: 0}
export function managePresents(state, action){
	switch (action.type) {
		case 'INCREASE':
		  return {numberOfPresnets: state.numberOfPresnets + 1}
		case 'DECREASE':
		  return {numberOfPresnets: state.numberOfPresnets - 1}
		default:
		  return state;
	  }
}
