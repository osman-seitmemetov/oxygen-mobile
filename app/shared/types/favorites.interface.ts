import { IProduct } from './product.interface'

export interface IFavoritesProduct {
	id: number
	product: IProduct
}

export interface IFavorites {
	id: number
	userId: number
	items: IFavoritesProduct[]
}
