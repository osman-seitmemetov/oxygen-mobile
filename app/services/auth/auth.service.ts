import { request } from '../api/request.api'
import {
	EnumAsyncStorage,
	IAuthFormData,
	IAuthResponse,
	SignUpFormData
} from '../../shared/types/auth.interface'
import { getAuthURL } from '../../config/api.config'
import { deleteTokensFromStorage, saveToStorage } from './auth.helpers'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthService = {
	async signIn(data: IAuthFormData) {
		const response = await request<IAuthResponse>({
			url: getAuthURL('/login'),
			method: 'POST',
			data
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},

	async signUp(data: SignUpFormData) {
		const response = await request<IAuthResponse>({
			url: getAuthURL('/registration'),
			method: 'POST',
			data
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},

	async logout() {
		const response = await request<IAuthResponse>({
			url: getAuthURL('/logout'),
			method: 'POST'
		})

		await deleteTokensFromStorage()
		await AsyncStorage.removeItem(EnumAsyncStorage.USER)

		return response
	}
}
