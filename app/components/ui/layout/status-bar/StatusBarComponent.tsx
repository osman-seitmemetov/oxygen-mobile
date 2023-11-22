import React, { FC, useContext } from 'react'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import { StatusBar } from 'expo-status-bar'

const StatusBarComponent: FC = () => {
	const { isDark } = useContext(ThemeContext)

	return <StatusBar style={isDark ? 'light' : 'dark'} />
}

export default StatusBarComponent
