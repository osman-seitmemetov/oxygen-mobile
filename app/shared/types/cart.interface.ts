import { IProduct } from './product.interface'

export interface ICartProduct {
	id: number
	count: number
	product: IProduct
}

export interface ICart {
	id: number
	userId: number
	count: number
	deliverySum: number
	sum: number
	globalSum: number
	discount: number
	items: ICartProduct[]
}
