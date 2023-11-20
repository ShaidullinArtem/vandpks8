import React from 'react'
import styles from '@/components/screens/home/Home.module.scss'
import { advantagesData, interestingData } from '@/components/screens/home/advantages.data'

const Info = () => {
	return (
		<div>
			<div className={styles.video}>
				<video controls width={650}>
					<source src='/public/video/present.mp4' type='video/mp4' />
					Ваш браузер не поддерживает встроенные видео :(
				</video>
			</div>
			<p>
				Юридическая контора Советник оказывает юридические услуги с 1998 года. Штат наших сотрудников состоит из
				высококвалифицированных юристов (опыт работы от 3 до 20 лет).
				Основным направлением деятельности юридической конторы является квалифицированная юридическая помощь,
				юридическая консультация гражданам, организациям и предпринимателям.
				Юридическая контора оказывает юридические услуги физическим лицам по следующим направлениям:
			</p>
			<ul>
				{advantagesData.map((item, index) => (
					<li key={`advantage-${index}`}>{item}</li>
				))}
			</ul>
			<p> В интересах юридических лиц юридическая контора оказывает юридические услуги по следующим
				направлениям:</p>
			<ul>
				{interestingData.map((item, index) => (
					<li key={`interesting-${index}`}>{item}</li>
				))}
			</ul>
			<p>
				Неважно, где находится Ваша организация, какой деятельностью она занимается, является ли она российской или
				иностранной. Мы предоставляем юридические услуги всем, кто ценит качество работы. Наши юристы готовы быть
				рядом всегда, когда Вам может понадобиться квалифицированная юридическая помощь.
				Грамотные и квалифицированные юридические услуги – это не только прекрасное знание законов – это знание
				пробелов и недостатков в законодательстве, сложившаяся юридическая практика, эффективные стратегии ведения
				дел, десятки нюансов, о которых можно узнать лишь за долгие годы успешной практики. Поэтому оказываемые нами
				услуги действительно помогают решить ваши проблемы, а не усугубить их.
				Всегда и во всем мы руководствуемся прежде всего интересами своих доверителей.
			</p>
		</div>
	)
}

export default Info
