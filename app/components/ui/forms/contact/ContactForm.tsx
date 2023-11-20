import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IContactQuery } from '@/components/ui/forms/contact/contact.interface'
import { validEmail } from '@/components/constants/regex/email.regex'
import styles from './ContactForm.module.scss'


const ContactForm = () => {

	const { register, handleSubmit, reset, formState: { errors } } = useForm<IContactQuery>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IContactQuery> = () => {
		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{errors.username && <p className={styles.error}>{errors.username.message}</p>}
			<input
				{...register('username', {
					required: {
						value: true,
						message: 'Поле является обязательным'
					}
				})}
				placeholder={'ФИО'}
				type='text'
			/>
			{errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
			<input
				{...register('phone', {
					required: {
						value: true,
						message: 'Поле является обязательным'
					},
					pattern: {
						value: validEmail,
						message: 'Неверный формат номера телефона'
					}
				})}
				placeholder={'Email'}
				type='text'
			/>
			<input type='submit' value={`Заказать звонок`} />
		</form>
	)
}

export default ContactForm
