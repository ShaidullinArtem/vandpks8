import React from 'react'
import Layout from '@/components/layout/Layout'
import styles from './Contact.module.scss'
import ContactForm from '@/components/ui/forms/contact/ContactForm'

const Contact = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Контакты</h1>
				<p className={styles.grphic}>
					Главный офис<br />
					г. Екатеринбург, ул.Машиностроителей, д. 11, 2 - 416.<br />
					м. Уралмаш<br />
					<br />
					Телефоны: (495) 592 95 04, (495) 780-05-02, (495) 708-37-87,<br />
					+7 926 452 12 04, +7 926 546 90 22<br />
					<br />
					Режим работы:<br />
					Понедельник – пятница с 10:00 до 19:00<br />
					Обед – с 13:00 до 14:00<br />
					<br />
					Выходной: Суббота, Воскресенье.<br />
					<br />
					Возможен прием в любое время по предварительной договоренности.
					<br />
					В выходные мы работаем только по предварительной записи.
					<br />
					Для обеспечения Вашего комфорта и экономии времени запишитесь на прием по телефону.
				</p>
				<iframe
					className={styles.map}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.037285145777!2d60.635393176972904!3d56.845304307318685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16c2bb59bbded%3A0xeab1b04598a35639!2z0YPQuy4g0J_QtdGA0LLQvtC80LDQudGB0LrQsNGPLCA3Mywg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDYy!5e0!3m2!1sru!2sru!4v1699521534836!5m2!1sru!2sru'
					allowFullScreen={true}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade' />
				<ContactForm />
			</div>
		</Layout>
	)
}

export default Contact
