import React, { FC, ReactNode, useState } from 'react'
import { Appearance } from 'react-native'
import { DARK_COLORS, LIGHT_COLORS } from '@/styles/colors'
import { IThemeContext } from '@/providers/theme/theme.interface'

export const ThemeContext = React.createContext<IThemeContext>({
	isDark: Appearance.getColorScheme() === 'dark',
	colors: Appearance.getColorScheme() === 'dark' ? DARK_COLORS : LIGHT_COLORS,
	setColorScheme: () => {}
})

const ThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	const colorScheme = Appearance.getColorScheme()
	const [isDark, setIsDark] = useState(colorScheme === 'dark')

	const defaultTheme: IThemeContext = {
		isDark,
		colors: isDark ? DARK_COLORS : LIGHT_COLORS,
		setColorScheme: scheme => {
			if (scheme === 'dark') Appearance.setColorScheme(scheme)
			else Appearance.setColorScheme('light')

			setIsDark(scheme === 'dark')
		}
	}

	return (
		<ThemeContext.Provider value={defaultTheme}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
