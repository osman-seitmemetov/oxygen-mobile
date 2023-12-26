import { FC } from 'react'
import { IMenuItem, TypeNavigate } from './menu.interface'
import {
	AntDesign,
	Feather,
	Fontisto,
	Ionicons,
	MaterialCommunityIcons
} from '@expo/vector-icons'
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
			{item.iconPack === 'Feather' && (
				<Feather
					//@ts-ignore
					name={item.iconName}
					size={22}
					color={isActive ? getColor('main') : getColor('mystic')}
				/>
			)}

			{item.iconPack === 'Ionicons' && (
				<Ionicons
					//@ts-ignore
					name={item.iconName}
					size={22}
					color={isActive ? getColor('main') : getColor('mystic')}
				/>
			)}

			{item.iconPack === 'AntDesign' && (
				<AntDesign
					//@ts-ignore
					name={item.iconName}
					size={22}
					color={isActive ? getColor('main') : getColor('mystic')}
				/>
			)}

			{item.iconPack === 'Fontisto' && (
				<Fontisto
					//@ts-ignore
					name={item.iconName}
					size={22}
					color={isActive ? getColor('main') : getColor('mystic')}
				/>
			)}

			{item.iconPack === 'MaterialCommunityIcons' && (
				<MaterialCommunityIcons
					//@ts-ignore
					name={item.iconName}
					size={26}
					color={isActive ? getColor('main') : getColor('mystic')}
				/>
			)}
		</Styled.MenuItem>
	)
}

export default MenuItem
