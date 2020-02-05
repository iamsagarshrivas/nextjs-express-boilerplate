import classes from './Loader.module.scss'
import { useSelector } from 'react-redux'
export default () => {

	const loader = useSelector(state => state.loader)

	return (
		loader && <div className={classes.cover}>
			<div className={classes.loading}>
				<span>Loading</span>
				<div className={classes.ldsDualRing}>
				</div>
			</div>

		</div>
	)
}