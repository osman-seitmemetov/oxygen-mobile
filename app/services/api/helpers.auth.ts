import { getItemAsync } from 'expo-secure-store'
import {
	EnumSecureStore,
	IAuthResponse
} from '../../shared/types/auth.interface'
import axios from 'axios'
import { API_URL, getAuthURL } from '../../config/api.config'
import { saveTokensToStorage } from '../auth/auth.helpers'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.refreshToken)
		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthURL('/refresh'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)

		if (response.data.accessToken) await saveTokensToStorage(response.data)
	} catch (e) {}
}
