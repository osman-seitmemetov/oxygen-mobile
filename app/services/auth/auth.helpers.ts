import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
import {
	EnumAsyncStorage,
	EnumSecureStore,
	IAuthResponse,
	ITokens
} from '@/shared/types/auth.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { request } from '@/services/api/request.api'
import { getUsersURL } from '@/config/api.config'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.accessToken)
	return accessToken || null
}

export const deleteTokensFromStorage = async () => {
	await deleteItemAsync(EnumSecureStore.accessToken)
	await deleteItemAsync(EnumSecureStore.refreshToken)
}

export const saveTokensToStorage = async (data: ITokens) => {
	await setItemAsync(EnumSecureStore.accessToken, data.accessToken)
	await setItemAsync(EnumSecureStore.refreshToken, data.refreshToken)
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
		)
	} catch (e) {
		return null
	}
}

export const saveToStorage = async (data: IAuthResponse) => {
	await saveTokensToStorage(data)
	try {
		await AsyncStorage.setItem(
			EnumAsyncStorage.USER,
			JSON.stringify(data.user)
		)
	} catch (e) {
		return null
	}
}

export const checkAuth = async () => {
	try {
		const response = await request<IAuthResponse>({
			url: getUsersURL(`/refresh`)
		})

		if (response.accessToken) {
			saveToStorage(response).then()
		}

		return response
	} catch (e) {
		return null
	}
}
