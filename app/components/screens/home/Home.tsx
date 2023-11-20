import React from 'react'
import styles from './Home.module.scss'
import Layout from '@/components/layout/Layout'
import Info from '@/components/screens/home/info/Info'

const Home = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<main>
					<Info />
				</main>
			</div>
		</Layout>
	)
}

export default Home
