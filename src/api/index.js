import axios from "axios"
const movieApi = axios.create({
	baseURL: process.env.REACT_APP_API,
})
movieApi.interceptors.request.use(config => {
	return config;
})

export default movieApi
export { axios };