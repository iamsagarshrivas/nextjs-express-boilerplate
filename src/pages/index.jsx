import axios from '../utils/axios';
import { useState } from 'react';
import Modal from '../components/Modal'
import { Button, Form, FormGroup, Label, Input, FormText, ModalFooter } from 'reactstrap';
import swal from 'sweetalert';
import Navigation from '../components/Navigation'


const PolicyList = (props) => {

	const initializeForm = (row) => {
		if (row) {
			console.log(row);

			return ({
				id: row.id,
				productName: row.productName,
				policyType: row.policyType,
				cashlessAvailable: row.cashlessAvailable,
				category: row.category,
				isActive: row.isActive
			})
		}
		setUpdating(false);
		return ({
			productName: '',
			policyType: 'Individual',
			cashlessAvailable: true,
			category: '',
			isActive: false
		})
	}
	const [policies, setPolicies] = useState(props.policies);
	const [count, setCount] = useState(policies.length);
	const [modal, setModal] = useState(false);
	const [FormData, setFormData] = useState({});
	const [updating, setUpdating] = useState(false);

	const onChangeHandler = e => {
		setFormData({ ...FormData, [e.target.name]: e.target.type !== 'checkbox' ? e.target.value : e.target.checked })
	}

	const onSubmitHandler = e => {
		e.preventDefault();
		console.log(FormData);

		axios.post('/policies', FormData)
			.then(async res => {
				console.log(res);
				setUpdating(false);
				setPolicies(await axios.get('/policies'))
				setCount(count => count + 1)
				toggle()
				swal("Success!", "Product added!", "success");
			})
			.catch(err => {
				console.table(err)
				setUpdating(false)
				toggle()
				swal("Error!", "Something went wrong", 'error');

			})
	}

	const onUpdateHandler = e => {
		e.preventDefault();
		console.log(FormData);
		axios.put(`/policies/${FormData.id}`, FormData)
			.then(res => {
				console.log(res)
				setUpdating(false)
				let policyArr = policies.map(element => {
					if (element.id === res.id) return res
					else return element
				});
				setPolicies([...policyArr]);
				toggle()
				swal("Success!", "Product updated!", "success");
			})
			.catch(err => {
				console.table(err)
				setUpdating(false)
				toggle()
				swal("Error!", "Something went wrong", 'error');
			})
	}

	const toggle = () => setModal(!modal);

	const onDeleteClickHandler = (id, index) => {
		swal({
			title: "Are you sure?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				axios.delete(`/policies/${id}`)
					.then(res => {
						console.log(res)
						let policyArr = policies;
						policyArr.splice(index, 1);
						setPolicies([...policyArr]);
						setCount(policyArr.length);
					})
					.catch(err => {
						console.table(err);
						swal(err.toString())
					})
			} else {

			}
		})
	}

	const addNewProduct = () => {
		setFormData(initializeForm(null));
		toggle();
	}

	const updateProduct = (row, index) => {
		setUpdating(true);
		setFormData(initializeForm(row));
		toggle();
	}


	return (
		<div className="container-fluid mt-3">
			<div className="row">
				<div className="col-2">
					<Navigation />
				</div>
				<div className="col-10">

					<div className="container-fluid pt-3">
						<Modal toggle={toggle} modal={modal} onSubmitHandler={onSubmitHandler} title={!updating ? 'Add new product' : 'Update Product'} >
							<Form onSubmit={onSubmitHandler}>
								<FormGroup>
									<Label>Product Name</Label>
									<Input name="productName" type="text" required value={FormData.productName} onChange={onChangeHandler} />
								</FormGroup>
								<FormGroup>
									<Label>Category</Label>
									<Input type="select" name="category" value={FormData.category} onChange={onChangeHandler} >
										<option disabled value=''>Select</option>
										{
											props.categories.map(category => (<option key={category.id} value={category.id}>{category.name}</option>))
										}
									</Input>
								</FormGroup>
								<FormGroup>
									<Label>Policy Type</Label>
									<Input name="policyType" disabled={FormData.category === '6' || FormData.category === '9'} required type="select" value={FormData.policyType} onChange={onChangeHandler} >
										<option value="Individual">Individual</option>
										<option value="">Group</option>
									</Input>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input onChange={onChangeHandler} type="checkbox" name="cashlessAvailable" checked={FormData.cashlessAvailable} />{' '}
										Cashless Facility available
        				</Label>
								</FormGroup>

								<FormGroup check>
									<Label check>
										<Input onChange={onChangeHandler} type="checkbox" name="isActive" checked={FormData.isActive} />{' '}
										Active
        				</Label>
								</FormGroup>
							</Form>
							<ModalFooter>
								<Button color="primary" onClick={updating ? onUpdateHandler : onSubmitHandler}>{updating ? 'Update' : 'Submit'}</Button>{' '}
								<Button color="secondary" onClick={toggle}>Cancel</Button>
							</ModalFooter>
						</Modal>
						<h3>List of Products</h3>

						<div className="d-flex pull-right">
							<button onClick={addNewProduct} className="border-0 btn btn-primary mb-3">Add new product</button>
						</div>


						<table className="table border">
							<thead className='thead-light'>
								<tr>
									<th>Product Name</th>
									<th>Category</th>
									<th>Policy Type</th>
									<th>Cashless Facility</th>
									<th>Active</th>
									<th className="d-flex justify-content-around">Actions</th>
								</tr>
							</thead>
							<tbody>
								{
									(Array.isArray(policies) && policies.length !== 0) && policies.map((policy, index) => {
										return <tr key={policy.id}>
											<td>{policy.productName}</td>
											<td>{policy.category && policy.category.name || '-'}</td>
											<td>{policy.policyType || '-'}</td>
											<td>{policy.cashlessAvailable ? 'Yes' : 'No'}</td>
											<td>{policy.isActive ? 'Yes' : 'No'}</td>
											<td className="d-flex justify-content-around">
												<buttom className="btn btn-primary" onClick={() => updateProduct(policy, index)}><i className="fa fa-pencil" ></i></buttom>
												<button className="btn btn-danger" onClick={() => onDeleteClickHandler(policy.id, index)}><i className="fa fa-trash" ></i></button>
											</td>
										</tr>
									})
								}
							</tbody>
							<tfoot>
								<tr><td colSpan={6}>{(Array.isArray(policies) && policies.length !== 0) ? `Total: ${count}` : 'No data to display'}</td></tr>
							</tfoot>
						</table>
					</div>

				</div>
			</div>
		</div>
	)

}

PolicyList.getInitialProps = async () => {
	const policies = await axios.get('/policies');
	const categories = await axios.get('/categories');
	return { policies, categories }
}

export default PolicyList