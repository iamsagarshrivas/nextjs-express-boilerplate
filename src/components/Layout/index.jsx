import Document, { Html, Head, Main, NextScript} from 'next/document'
import moduleName from 'next/'
const Layout = (props) =>  {
	return (
		<Html>
			<Head>
			<link rel="shortcut icon" href='/static/favicon.ico' type="image/x-icon" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>

		
	)
}

export default Layout
