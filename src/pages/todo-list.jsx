import { useRef, useState } from 'react'
import axios from '../utils/axios'
import store from '../redux/store'
import * as actions from '../redux/actions'
import { useSelector } from 'react-redux'

const Todo = () => {

	const {todo: todoItem} = useSelector(state => state);
	console.log('state', todoItem);
	

	const todo = useRef();
	const onClickHandler = (e) => {
		axios.get(`todos/${todo.current.value}`)
			.then(res => store.dispatch(actions.changeTodo(res)))
			.catch(err => console.log(err))
	}
	return (
		<div>
			<input type={"text"} ref={input => todo.current = input} />
			<button onClick={onClickHandler}>Show todo</button>
			{todoItem && <div>
				<div>user id: {todoItem.userId} </div>
				<div>id: {todoItem.id} </div>
				<div>title: {todoItem.title}</div>
			</div>}
		</div>
	)
}
export default Todo