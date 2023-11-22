import { request } from '@/services/api/request.api'
import { getCategoriesURL } from '@/config/api.config'
import { ICategory, ICategoryFields } from '@/shared/types/category.interface'

export const CategoryService = {
	async getAll(params?: { term?: string }) {
		return await request<ICategory[]>({
			url: getCategoriesURL(),
			method: 'GET',
			params
		})
	},

	// async getChildrenById(id: string) {
	// 	return await axios.get<IProductsFilterData>(
	// 		`http://localhost:5000/api/category/children/${id}`
	// 	)
	// },

	async getById(id: string) {
		return await request<ICategoryFields>({
			url: getCategoriesURL(`/${id}`),
			method: 'GET'
		})
	}

	// async create(data: ICategoryFields) {
	// 	return await axios.post<ICategory>(
	// 		`http://localhost:5000/api/category`,
	// 		data
	// 	)
	// },
	//
	// async edit(id: string, data: ICategoryFields) {
	// 	return await axiosClassic.put<ICategory>(
	// 		`http://localhost:5000/api/category/${id}`,
	// 		data
	// 	)
	// },
	//
	// async delete(id: number) {
	// 	return await axiosClassic.delete<string>(
	// 		`http://localhost:5000/api/category/${id}`
	// 	)
	// }
}
