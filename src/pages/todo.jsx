import axios from 'axios'
import Navigation from '../components/Navigation'

const Todo = (props) => {
	return (
	<div className="container-fluid">
		<div className="row">
			<div className="col-2">
				<Navigation />
			</div>
			<div className="col-10">
				<h6>userId: {props.data.userId}</h6>
				<h6>id: {props.data.id}</h6>
				<h6>title: {props.data.title}</h6>
			</div>
		</div>
	</div>
)}

Todo.getInitialProps = async () => {
	console.log('todo page');

	const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 100)}`);
	return {data:data.data}
	
	// return { data: data }
}

export default Todo