import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../assets/styles/index.scss'

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
		  <Component {...pageProps} />
		</>
	  )
	}
  }