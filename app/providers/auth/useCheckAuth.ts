import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'
import { getAccessToken } from '../../services/auth/auth.helpers'
import { errorCatch } from '../../services/api/error.api'
import { AuthService } from '../../services/auth/auth.service'
import { getNewTokens } from '../../services/api/helpers.auth'
import { getItemAsync } from 'expo-secure-store'
import { EnumSecureStore } from '../../shared/types/auth.interface'

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken()

			if (accessToken) {
				try {
					await getNewTokens()
				} catch (e) {
					if (errorCatch(e) === 'jwt expired') {
						await AuthService.logout()
						setUser(null)
					}
				}
			}
		}

		checkAccessToken().then()
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(
				EnumSecureStore.refreshToken
			)

			if (!refreshToken && user) {
				await AuthService.logout()
				setUser(null)
			}
		}

		checkRefreshToken().then()
	}, [])
}
