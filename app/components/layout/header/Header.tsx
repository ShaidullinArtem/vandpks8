import React from 'react'
import styles from './Header.module.scss'
import Nav from '@/components/layout/nav/Nav'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.hero}>
				<h1>
					Юридическая контора<br />
					<span>"Советник"</span>
				</h1>
				<img
					src='https://avatars.mds.yandex.net/i?id=18352346e0c70753698dbe72b4daaf5d0f1a9453-7083384-images-thumbs&n=13'
					alt='scales' />
			</div>
			<p className={styles.description}>Юридические услуги, юридическая консультация, юридические услуги физическим
				лицам</p>
			<Nav />
		</div>
	)
}

export default Header
