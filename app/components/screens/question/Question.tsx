import React from 'react'
import Layout from '@/components/layout/Layout'
import styles from './Question.module.scss'
import { questionsData } from '@/components/screens/question/questions.data'
import SupportItem from '@/components/ui/support-tem/SupportItem'
import ContactForm from '@/components/ui/forms/contact/ContactForm'

const Question = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Вопросы - ответы</h1>
				{questionsData.map((item, index) => (
					<SupportItem key={`question-item-${index}`} {...item} />
				))}
				<p>Чтобы задать свой юридический вопрос, используйте данную форму</p>
			</div>
			<ContactForm />
		</Layout>
	)
}

export default Question
