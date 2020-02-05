import Link from 'next/link';
import { useState } from 'react';
import axios from '../../utils/axios';

const Form = (props) => {	

	const [formData, setFormData] = useState({
		name: '',
		policyNumber: '',
		description: '',
		category: []
	});

	const onChangeHandler = e => {		
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const onSubmitHandler = e => {
		e.preventDefault();
		axios.post('policies', formData)
		.then(res => console.log(res))
		.catch(err => console.table(err))
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<div>
				<label>Name</label>
				<input name="name" type="text" required value={formData.name} onChange={onChangeHandler} />
			</div>
			<div>
				<label>Policy Number</label>
				<input name="policyNumber" required type="number" value={formData.policyNumber} onChange={onChangeHandler} />
			</div>
			<div>
				<label>description</label>
				<textarea name="description" value={formData.description} onChange={onChangeHandler} />
			</div>
			<div>
				<label>Category</label>
				<select name="category" value={formData.category} onChange={onChangeHandler} >
					<option disabled value=''>Select</option>
					{
						props.categories.map(category => (<option key={category.id} value={category.id}>{category.name}</option>))
					}
				</select>
			</div>
			<input type="submit" value="submit"/>
		</form>
	)
}

Form.getInitialProps = async () => {

	const data  = await axios.get('/categories');	
	return { categories: data }

}

export default Form