import Link from 'next/link'
export default () => (
	<ul className="nav">
		<li className="nav-item">
			<Link href="/"><a className="nav-link">Form CRUD</a></Link>
			<Link href="/todo"><a className="nav-link">Todo list</a></Link>			
			<Link href="/insurance/health-insurance"><a className="nav-link">Health Insurance</a></Link>
			<Link href="/insurance/motor-insurance"><a className="nav-link">Motor Insurance</a></Link>
			<Link href="/insurance/travel-insurance"><a className="nav-link">Travel Insurance</a></Link>
		</li>
	</ul>
)