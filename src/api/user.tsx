import axios from 'axios';
import { basePath } from './axios';

export const getUsers = async () => {
	try {
		const {data} = await axios.get(basePath + '/users'); // make the request
		return data;
	} catch (e) {
		console.error(e); // catch the error
		return Promise.reject(e);
	}
}
