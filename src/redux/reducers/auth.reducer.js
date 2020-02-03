import * as types from '../types'
const initialState = {

}

export default (state = initialState, { type, payload }) => {
	switch (type) {

	case types.SIGN_IN:
		return { ...state, ...payload }

	default:
		return state
	}
}
