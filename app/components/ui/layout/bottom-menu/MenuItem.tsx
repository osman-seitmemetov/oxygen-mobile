import { FC } from 'react'
import { IMenuItem, TypeNavigate } from './menu.interface'
import { Feather } from '@expo/vector-icons'
import { getColor } from '@/styles/colors'
import Styled from './menu.styles'
import { useAuth } from '@/hooks/useAuth'

interface MenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<MenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path
	const { user } = useAuth()

	const screen =
		item.path === 'Profile' ? (user ? 'Profile' : 'SignIn') : item.path

	return (
		<Styled.MenuItem onPress={() => nav(screen)}>
			<Feather
				name={item.iconName}
				size={22}
				color={isActive ? getColor('main') : getColor('mystic')}
			/>
		</Styled.MenuItem>
	)
}

export default MenuItem
