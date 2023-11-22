import { IUser } from '@/shared/types/user.interface'
import { getUsersURL } from '@/config/api.config'
import { request } from './api/request.api'
import { IResponseMessage } from './api/api.interface'
import { ProfileFormData } from '@/components/screens/profile/profile-form/profile-form.interface'

export const UserService = {
	async getAll(term?: string) {
		return await request<IUser>({
			url: getUsersURL('/users'),
			method: 'GET',
			params: term ? { term } : {}
		})
	},

	async getById(id: number) {
		return await request<IUser>({
			url: getUsersURL(`/${id}`),
			method: 'GET'
		})
	},

	async editProfile(editData: ProfileFormData) {
		return await request<IUser>({
			url: getUsersURL(`/edit`),
			method: 'PUT',
			data: editData,
			withCredentials: true
		})
	},

	async editUser(editData: ProfileFormData, id: string) {
		return await request<IUser>({
			url: getUsersURL(`/edit/${id}`),
			method: 'PUT',
			data: editData
		})
	},

	async delete(id: number) {
		return await request<IResponseMessage>({
			url: getUsersURL(`/${id}`),
			method: 'DELETE'
		})
	}
}
