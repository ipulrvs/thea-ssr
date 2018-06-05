function GlobalReducer(state = {
	initialize: false,
	moduleSwitch: false,
	data: []
}, action){
	switch(action.type){
		case "CONSTANT_STRING":
			console.log("YOU HAVE ACCESS REDUCER")
			console.log("TRY MANIPULATE STORE")
			return {
				...state,
				initialize: true
			}
		case "CONSTANT_STRING_TEST":
			return {
				...state,
				initialize: false
			}
		default: 
			return {
				...state
			}
	}
}

export default GlobalReducer