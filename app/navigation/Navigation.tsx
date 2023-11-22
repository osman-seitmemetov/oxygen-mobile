import React, { FC, useEffect, useState } from 'react'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import PrivateNavigator from './PrivateNavigator'
import { useCheckAuth } from '@/providers/auth/useCheckAuth'
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

const Navigation: FC = () => {
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute?.name)
		)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	useCheckAuth(currentRoute)

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigator />
			</NavigationContainer>
			<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
		</>
	)
}

export default Navigation
