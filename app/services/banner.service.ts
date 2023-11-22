import { getBannersURL } from '../config/api.config'
import { request } from './api/request.api'
import { IBanner } from '../shared/types/banner.interface'

export const BannerService = {
	async getAll(term?: string) {
		return await request<IBanner[]>({
			url: getBannersURL(),
			method: 'GET',
			params: term ? { term } : {}
		})
	},

	async getById(id: number) {
		console.log(id)
		return await request<IBanner>({
			url: getBannersURL(`/${id}`),
			method: 'GET'
		})
	}

	// async create(data: IBannerFields) {
	// 	return await axios.post<IBanner>(
	// 		`http://localhost:5000/api/banner`,
	// 		data
	// 	)
	// },
	//
	// async edit(id: string, data: IBannerFields) {
	// 	return await axiosClassic.put<IBanner>(
	// 		`http://localhost:5000/api/banner/${id}`,
	// 		data
	// 	)
	// },
	//
	// async delete(id: number) {
	// 	return await axiosClassic.delete<string>(
	// 		`http://localhost:5000/api/banner/${id}`
	// 	)
	// }
}
