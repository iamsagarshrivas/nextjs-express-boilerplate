import axios from '../../utils/axios';
import { useState } from 'react';

const PolicyList = (props) => {

	const [policies, setPolicies] = useState(props.policies);

	const onDeleteClickHandler = (id, index) => {
		if (confirm("Are you sure?")) {
			axios.delete(`/policies/${id}`)
				.then(res => {
					console.log(res)
					let policyArr = policies;
					policyArr.splice(index, 1);
					setPolicies([...policyArr]);
					alert('Item deleted!!')
				})
				.catch(err => {
					console.table(err);
					alert(err.toString())
				})
		}
	}

	return (<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Policy Number</th>
				<th>Descrition</th>
				<th>Category</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{
				policies.map((policy, index) => {
					return <tr key={policy.id}>
						<td>{policy.name}</td>
						<td>{policy.policyNumber}</td>
						<td>{policy.description}</td>
						<td>{policy.category && policy.category.name || '-'}</td>
						<td><button onClick={() => onDeleteClickHandler(policy.id)}>delete</button></td>
					</tr>
				})
			}
		</tbody>
	</table>)

}

PolicyList.getInitialProps = async () => {
	const data = await axios.get('/policies');
	return { policies: data }
}

export default PolicyList