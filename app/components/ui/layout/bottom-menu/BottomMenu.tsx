import { FC, useContext } from 'react'
import { TypeNavigate } from './menu.interface'
import Styled from './menu.styles'
import { menuItems } from './menu.data'
import MenuItem from './MenuItem'
import { ThemeContext } from '@/providers/theme/ThemeProvider'

interface BottomMenuProps {
	nav: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<BottomMenuProps> = ({ currentRoute, nav }) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<Styled.View
			style={{
				backgroundColor: isDark ? 'rgb(28, 28, 30)' : '#fff'
			}}
		>
			{menuItems.map(item => (
				<MenuItem
					key={item.path}
					item={item}
					nav={nav}
					currentRoute={currentRoute}
				/>
			))}
		</Styled.View>
	)
}

export default BottomMenu
