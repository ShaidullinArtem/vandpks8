import React from 'react'
import { navRoutes } from '@/components/layout/nav/routes'
import styles from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={styles.nav}>
			{navRoutes.map(route => (
				<a href={`${route.path}`}>{route.name}</a>
			))}
		</nav>
	)
}

export default Nav
