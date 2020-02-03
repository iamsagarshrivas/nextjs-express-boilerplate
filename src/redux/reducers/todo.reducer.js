import * as types from '../types'
const initialState = {
	userId: null,
	id: null,
	title: null
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.CHANGE_TODO:
			return { ...state, ...payload }

		default:
			return state
	}
}
