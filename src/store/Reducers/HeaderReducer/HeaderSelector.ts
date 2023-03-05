import {AppStateType} from "../../store";
import {createSelector} from "reselect";

const getStateDate =  (state:AppStateType) => {
	return state.header.date
}

export const getDate = createSelector(getStateDate,(date)=>{
	const days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	];
	const months = [
		'янв',
		'фев',
		'мар',
		'апр',
		'май',
		'июн',
		'июл',
		'авг',
		'сен',
		'окт',
		'ноя',
		'дек'
	];
	const day = date.getDay();
	const month = date.getMonth()
	return {
		day: String(days[day]),
		month: String(months[month]),
		date: String(date.getDate())
	}
})