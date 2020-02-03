import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.interceptors.response.use(response=>{
	return response.data
})

export default axiosInstance