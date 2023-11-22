import React, { FC, useContext } from 'react'
import { Appearance, Switch, Text, useColorScheme } from 'react-native'
import { useAuth } from '@/hooks/useAuth'
import Heading from '@/components/ui/layout/heading/Heading'
import { Layout, Section } from '@/components/ui'
import { ThemeContext } from '@/providers/theme/ThemeProvider'

const ProfileTheme: FC = () => {
	const { setUser, user } = useAuth()

	const { colors, isDark, setColorScheme } = useContext(ThemeContext)
	const theme = useColorScheme()

	const handleChangeColorTheme = (isTrue: boolean) =>
		setColorScheme(isTrue ? 'dark' : 'light')

	return (
		<Layout>
			<Heading isHasBack title={`${user?.firstname} ${user?.lastname}`} />
			<Section title='Приложение'>
				<Text style={{ color: 'red' }}>
					{Appearance.getColorScheme()}
				</Text>
				<Text style={{ color: 'red' }}>{theme}</Text>

				<Text style={{ color: 'red' }}>
					{isDark ? 'Dark' : 'Light'} Mode
				</Text>

				<Switch
					thumbColor={colors.thumbColor}
					value={isDark}
					onValueChange={handleChangeColorTheme}
				/>
			</Section>
		</Layout>
	)
}

export default ProfileTheme
