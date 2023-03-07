import axios from "axios";

const getListBaseURL = axios.create({
	baseURL: 'https://api.skilla.ru/mango/getList',
	headers: {
		'Authorization': 'Bearer token'
	},
});

export const getListAPI = {
	getList(date:string){
		return console.log(getListBaseURL.post(`date_start=<${date}>&date_end=<2023-03-03`))
	}
}