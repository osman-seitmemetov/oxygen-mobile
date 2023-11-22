import { request } from './api/request.api'
import { ICart, ICartProduct } from '@/shared/types/cart.interface'
import { getCartURL } from '@/config/api.config'

export const CartService = {
	async get() {
		return await request<ICart>({
			url: getCartURL(),
			method: 'GET'
		})
	},

	async addToCart(data: { productId: number }) {
		return await request<ICartProduct>({
			url: getCartURL('/add'),
			method: 'POST',
			data
		})
	},

	async deleteFromCart(data: { productId: number }) {
		return await request<string>({
			url: getCartURL('/delete'),
			method: 'POST',
			data
		})
	},

	// async deleteAll() {
	// 	return await instance.delete<string>('/basket', {
	// 		withCredentials: true
	// 	})
	// },
	//
	// async deleteById(id: string) {
	// 	return await instance.delete<string>(`/basket/${id}`, {
	// 		withCredentials: true
	// 	})
	// },

	async changeCount(id: number, count: number) {
		return await request<string>({
			url: getCartURL(`/${id}`),
			method: 'PUT',
			data: { id, count }
		})
	}
}
