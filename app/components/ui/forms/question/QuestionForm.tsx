import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from '@/components/constants/regex/email.regex'
import styles from './QuestionForm.module.scss'
import { IQuestionQuery } from '@/components/ui/forms/question/question.interface'


const QuestionForm = () => {

	const { register, handleSubmit, reset, formState: { errors } } = useForm<IQuestionQuery>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IQuestionQuery> = data => {
		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{errors.name && <p className={styles.error}>{errors.name.message}</p>}
			<input
				{...register('name', {
					required: {
						value: true,
						message: 'Поле является обязательным'
					}
				})}
				placeholder={'ФИО'}
				type='text'
			/>
			{errors.email && <p className={styles.error}>{errors.email.message}</p>}
			<input
				{...register('email', {
					required: {
						value: true,
						message: 'Поле является обязательным'
					},
					pattern: {
						value: validEmail,
						message: 'Неверный формат эл. почты'
					}
				})}
				placeholder={'Email'}
				type='text'
			/>
			{errors.question && <p className={styles.error}>{errors.question.message}</p>}
			<textarea
				{...register('question', {
					required: {
						value: true,
						message: 'Поле является обязательным'
					},
					maxLength: {
						value: 2000,
						message: 'Вопрос должен быть менее 2000 символов'
					}
				})}
				placeholder={`Вопрос`}
			/>
			<input type='submit' />
		</form>
	)
}

export default QuestionForm
