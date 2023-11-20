import { IRoute } from '@/components/layout/nav/nav.interface'

export const navRoutes: IRoute[] = [
	{
		name: 'Главная',
		path: '/'
	},
	{
		name: 'Услуги и цены',
		path: '/price'
	},
	{
		name: 'Гражданам',
		path: '/citizens'
	},
	{
		name: 'Юридическим лицам',
		path: '/citizens'
	},
	{
		name: 'Вопросы-ответы',
		path: '/questions'
	},
	{
		name: 'Контакты',
		path: '/contact'
	}
]
