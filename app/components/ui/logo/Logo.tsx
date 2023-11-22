import React, { FC } from 'react'
import { HeaderProps } from './logo.interface'
import Styled from './logo.styles'
import { Pressable } from 'react-native'
import { useTypedNavigation } from '../../../hooks/useTypedNavigation'

const Logo: FC<HeaderProps> = () => {
	const { navigate } = useTypedNavigation()

	return (
		<Pressable onPress={() => navigate('Home')}>
			<Styled.Image source={require('../../../assets/logo.png')} />
		</Pressable>
	)
}

export default Logo
