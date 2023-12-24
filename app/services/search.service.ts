import { getProductsURL } from '@/config/api.config'
import { request } from './api/request.api'
import { IProduct } from '@/shared/types/product.interface'

export const SearchService = {
	async getResult(params?: {
		term?: string
		categoryId?: number
		brandIds?: number[]
		typeIds?: number[]
		sort?: string
		priceMin?: number
		priceMax?: number
		parameters?: {
			parameterId: number
			title: string
			type: string
			format: string
			valueIds: number[]
			valueId: number
			// value: IValue
		}[]
	}) {
		return await request<IProduct[]>({
			url: getProductsURL(),
			method: 'GET',
			params: {
				term: params?.term,
				categoryId: params?.categoryId,
				typeIds: JSON.stringify(params?.typeIds),
				brandIds: JSON.stringify(params?.brandIds),
				sort: params?.sort,
				priceMin: params?.priceMin,
				priceMax: params?.priceMax,
				parameters: params?.parameters
			}
		})
	}
}
