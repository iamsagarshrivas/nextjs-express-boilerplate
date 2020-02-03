import * as types from '../types'
export const changeTodo =  ({ userId, id, title }) => {
	return {
		type: types.CHANGE_TODO,
		payload: {
			id, userId, title
		}
	}
}