import {AppStateType} from "../../store";
import {createSelector} from "reselect";

 export const getDate: (state:AppStateType) => string = (state) => {
	return  String(`${state.app.date.getFullYear()}-${state.app.date.getMonth()}-${state.app.date.getDate()}`)
}