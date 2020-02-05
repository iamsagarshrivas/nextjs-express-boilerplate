import NavList from '../../components/Navigation'
import InsuranceCard from '../../components/InsuranceCard'
import axios from '../../utils/axios'

const MotorInsurance = (props) => (
	<div className="container-fluid mt-3">
		<div className="row">
			<div className="col-2">
				<NavList />
			</div>

			<div className="col-10">
				<InsuranceCard {...props.data} />
		</div>
		</div>
	</div>
)

MotorInsurance.getInitialProps = async () => {
	const data = await axios.get('/insurances/1');
	return { data }
}

export default MotorInsurance