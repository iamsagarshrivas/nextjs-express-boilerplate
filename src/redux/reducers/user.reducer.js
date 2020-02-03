import * as types from '../types'
const initialState = {

}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case types.SET_USER_DATA:
			return { ...state, ...payload }

		default:
			return state
	}
}
