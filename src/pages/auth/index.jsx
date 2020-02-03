import SignIn from './sign-in';
import Router from 'next/router';
import { useEffect, Fragment } from 'react';
export default () => {
	useEffect(() => {
		const { pathname } = Router
		console.log('pathname', pathname);
		if (pathname === '/auth') {
			Router.push('/auth/sign-in')
		}

	}, [])
	return (
		<Fragment />
	)
}