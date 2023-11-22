import { IUser } from './user.interface'

export interface IAuthFormData {
	email: string
	password: string
}

export enum EnumAsyncStorage {
	USER = 'USER'
}

export enum EnumSecureStore {
	accessToken = 'accessToken',
	refreshToken = 'refreshToken'
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface SignUpFormData {
	phone: string
	birthday: Date
	lastname: string
	firstname: string
	gender: 'MALE' | 'FEMALE'
	email: string
	password: string
	confirm: string
}
