export interface IUser {
	firstname: string
	lastname: string
	email: string
	isActivated: boolean
	id: number
	birthday: string
	gender: 'MALE' | 'FEMALE'
	phone: string
	role?: string
}
