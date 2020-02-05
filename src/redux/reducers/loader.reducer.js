import * as types from '../types';

const initialState = false

export default (state = initialState, { type }) => {
	switch (type) {

		case types.SHOW_LOADER:
			return true

		case types.HIDE_LOADER:
			return false

		default:
			return state
	}
}
