import { IValue } from '@/shared/types/value.interface'

export interface IParameter {
	id: number
	title: string
	type: string
	format: string
	values: IValue[]
}
