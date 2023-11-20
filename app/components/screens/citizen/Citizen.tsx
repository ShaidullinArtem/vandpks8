import React from 'react'
import Layout from '@/components/layout/Layout'
import styles from './Citizen.module.scss'
import { supportsData } from '@/components/screens/citizen/supports.data'
import SupportItem from '@/components/ui/support-tem/SupportItem'
import { citizenServicesData } from '@/components/screens/citizen/citizen-services.data'

const Citizen = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Гражданам</h1>
				{supportsData.map((item, index) => (
					<SupportItem key={`support-item-${index}`} {...item} />
				))}
				<p className={`description`}>
					Юридическая контора оказывает юридические услуги физическим лицам: гражданам и индивидуальным предпринимателям
					по следующим направлениям:
				</p>
				<ul>
					{citizenServicesData.map((item, index) => (
						<li key={`citizen-service-item-${index}`}>{item}</li>
					))}
				</ul>
			</div>
		</Layout>
	)
}

export default Citizen
