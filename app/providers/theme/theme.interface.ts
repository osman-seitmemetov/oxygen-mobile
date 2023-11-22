export interface IThemeContext {
	isDark: boolean
	colors: {
		layout: string
		textColor: string
		thumbColor: string
	}
	setColorScheme: (scheme: 'dark' | 'light') => void
}
