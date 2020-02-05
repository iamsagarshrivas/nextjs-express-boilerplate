import axios from 'axios'
import store from '../../redux/store'
import * as actions from '../../redux/actions'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:1337'
})

axiosInstance.interceptors.request.use(config => {
	store.dispatch(actions.showLoader())
	return config
})

axiosInstance.interceptors.response.use(response => {
	store.dispatch(actions.hideLoader())
	return response.data
},
error => {
	store.dispatch(actions.hideLoader())

})

export default axiosInstance