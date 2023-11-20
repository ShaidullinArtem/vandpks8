import React from 'react'
import Layout from '@/components/layout/Layout'
import styles from './Price.module.scss'
import { servicesData } from '@/components/screens/price/services.data'

const Price = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Услуги и цены</h1>
				<p className={styles.desctiption}> Более точно стоимость услуги по Вашему вопросу можно узнать на первой
					консультации, после детального изучения Вашей проблемы или рассчитать по Прейскуранту-калькулятору (см.
					ниже).
				</p>
				<div className={styles['table-wrapper']}>
					<table>
						<thead>
						<tr>
							<th style={{ width: '70%' }}>Правовые консультации</th>
							<th>Стоимость руб.</th>
						</tr>
						</thead>
						<tbody>
						{servicesData.map((service, index) => (
							<tr key={`tables-service-${index}`}>
								<td scope={`row`}>{service.name}</td>
								<td>{service.price}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
				<h1 className={styles.title2}>
					Заголовок Прейскурант на юридические услуги с 01.01.2016
				</h1>
				<p className={styles.description2}>
					Для подсчета суммы перенесите услуги из списка приведенного снизу, в поле калькулятора.
				</p>
			</div>
		</Layout>
	)
}

export default Price
