const initialState = {
	date: new Date()
}
export type HeaderReducerInitialStateType = typeof initialState
 const HeaderReducer = (state = initialState,action:any) => {
	switch (action.type){
		default:
			return state
	}
 }

export default HeaderReducer;