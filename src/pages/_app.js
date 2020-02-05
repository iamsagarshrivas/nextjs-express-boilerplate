import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../assets/styles/index.scss'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Loader from '../components/Loader'
import Header from '../components/Header'
export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					<title>My new cool title</title>
				</Head>
				<Provider store={store}>
					<Loader />
					<Header />
					<Component {...pageProps} />
				</Provider>
			</>
		)
	}
}