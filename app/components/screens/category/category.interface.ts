import { IValue } from '@/shared/types/value.interface'
import { ICategory } from '@/shared/types/category.interface'
import { IParameter } from '@/shared/types/parameter.interface'
import { IType } from '@/shared/types/type.interface'
import { IBrand } from '@/shared/types/brand.interface'

export interface IProductsFilterFields {
	typeIds: number[]
	brandIds: number[]
	sort: string
	priceMin: number
	priceMax: number
	parameters: {
		parameterId: number
		title: string
		type: string
		format: string
		valueIds: number[]
		valueId: number
		value: IValue
	}[]
}

export interface IProductsFilterData {
	parent1Lvl?: ICategory
	parent2Lvl?: ICategory
	childCategory2Lvls?: ICategory[]
	childCategory3Lvls: ICategory[]
	types: IType[]
	brands: IBrand[]
	parameters: IParameter[]
}
