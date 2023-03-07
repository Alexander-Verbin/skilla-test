const initialState = {
	date: new Date()
}
export type AppInitialStateType = typeof initialState
 const AppReducer = (state = initialState, action:any) => {
	switch (action.type){
		default:
			return state
	}
 }

export default AppReducer;