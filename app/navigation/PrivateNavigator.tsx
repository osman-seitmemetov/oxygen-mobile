import { FC, useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { useAuth } from '@/hooks/useAuth'
import { routes } from './routes'
import Screen404 from '@/components/screens/system/Screen404'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import { DARK_COLORS, LIGHT_COLORS } from '@/styles/colors'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
	const { user } = useAuth()
	const { isDark } = useContext(ThemeContext)

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: isDark
						? DARK_COLORS.layout
						: LIGHT_COLORS.layout
				}
			}}
		>
			{routes.map(route => {
				if (!route.isOnlyAdmin && !route.isOnlyUser)
					return <Stack.Screen key={route.name} {...route} />
				if (user?.role === 'ADMIN')
					return <Stack.Screen key={route.name} {...route} />
				if (route.isOnlyAdmin) {
					return (
						<Stack.Screen
							key='Screen404'
							name='Screen404'
							component={Screen404}
						/>
					)
				}
				const isUser = user && user.role !== 'ADMIN'
				if (isUser && route.isOnlyUser)
					return <Stack.Screen key={route.name} {...route} />
			})}
		</Stack.Navigator>
	)
}

export default PrivateNavigator
