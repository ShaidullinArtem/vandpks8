import React, { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import Header from '@/components/layout/header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			{children}
			<footer>
				2016 - ЮК Советник
			</footer>
		</div>
	)
}

export default Layout
