import {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useState
} from 'react'
import { IContext, TypeUserState } from './auth-provider.interface'
import * as SplashScreen from 'expo-splash-screen'
import {
	checkAuth,
	getAccessToken,
	getUserFromStorage
} from '@/services/auth/auth.helpers'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync().then()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	// useEffect(() => {
	// let isMounted = true
	//
	// const checkAccessToken = async () => {
	// 	try {
	// 		const accessToken = await getAccessToken()
	//
	// 		if (accessToken) {
	// 			const user = await getUserFromStorage()
	// 			if (isMounted) setUser(user)
	// 		}
	// 	} catch (e) {
	// 	} finally {
	// 		await SplashScreen.hideAsync()
	// 	}
	// }
	//
	// checkAccessToken().then()

	// 	return () => {
	// 		isMounted = false
	// 	}
	// }, [])

	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()

				if (accessToken) {
					const isAuth = await checkAuth()

					if (isAuth) {
						const user = await getUserFromStorage()
						if (isMounted) setUser(user)
					}
				}
			} catch (e) {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		checkAccessToken().then()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
