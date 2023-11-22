import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './app/navigation/Navigation'
import AuthProvider from './app/providers/auth/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Toast from './app/components/ui/Toast'
import React, { useContext } from 'react'
import ThemeProvider, { ThemeContext } from '@/providers/theme/ThemeProvider'
import StatusBarComponent from '@/components/ui/layout/status-bar/StatusBarComponent'
import { DARK_COLORS, LIGHT_COLORS } from '@/styles/colors'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
	const { isDark } = useContext(ThemeContext)

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<AuthProvider>
					<SafeAreaProvider
						style={{
							backgroundColor: isDark
								? DARK_COLORS.layout
								: LIGHT_COLORS.layout
						}}
					>
						<Navigation />
					</SafeAreaProvider>
				</AuthProvider>
				<StatusBarComponent />
				<Toast />
			</ThemeProvider>
		</QueryClientProvider>
	)
}
