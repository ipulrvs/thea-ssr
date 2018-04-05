function GlobalReducer(state = {
	initialize: false,
	moduleSwitch: false
}, action){
	switch(action.type){
		case "CONSTANT_STRING":
			console.log("YOU HAVE ACCESS REDUCER")
			console.log("TRY MANIPULATE STORE")
			return {
				...state,
				initialize: true
			}
		default: 
			return {
				...state
			}
	}
}

export default GlobalReducer