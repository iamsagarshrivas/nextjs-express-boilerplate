export default ({ heading, description, image }) => {
	return (
		<div className="container-fluid">
			<img style={{ maxWidth: '100%', height:250 }} className="d-flex mx-auto" src={`http://localhost:1337${image.url}`} alt="policy image" />
			<h3>{heading}</h3>
			<p>
				{description}
			</p>

		</div>
	)
}