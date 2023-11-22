import React, { FC } from 'react'
import { HeaderProps } from './header.interface'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Logo from '@/components/ui/logo/Logo'
import Styled from './header.styles'

const Header: FC<HeaderProps> = () => {
	return (
		<Styled.Header>
			<Logo />

			<Pressable>
				<Feather name='search' size={24} />
			</Pressable>
		</Styled.Header>
	)
}

export default Header
