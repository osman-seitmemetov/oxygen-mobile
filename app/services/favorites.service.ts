import { request } from './api/request.api'
import {
	IFavorites,
	IFavoritesProduct
} from '@/shared/types/favorites.interface'

export const FavoritesService = {
	async get() {
		return await request<IFavorites>({
			url: '/favorites',
			method: 'GET'
		})
	},

	async add(data: { productId: number }) {
		return await request<IFavoritesProduct>({
			url: '/favorites/add',
			method: 'POST',
			data
		})
	},

	async delete(data: { productId: number }) {
		return await request<string>({
			url: '/favorites/delete',
			method: 'POST',
			data
		})
	}
}
