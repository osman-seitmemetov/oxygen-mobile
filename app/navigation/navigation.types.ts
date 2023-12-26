import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	SignIn: undefined
	SignUp: undefined
	Home: undefined
	Greeting: undefined
	Screen404: undefined
	Favorites: undefined
	Cart: undefined
	Catalog: undefined
	Profile: undefined
	ProfileTheme: undefined
	Category: {
		id: number
	}
	Product: {
		id: number
	}
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	Admin: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}
