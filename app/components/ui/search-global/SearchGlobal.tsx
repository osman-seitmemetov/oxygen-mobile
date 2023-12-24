import { FC, useContext } from 'react'
import { SearchGlobalProps } from './search-global.interface'
import { Feather } from '@expo/vector-icons'
import Styled from './search-global.styles'
import { DARK_COLORS, getColor, LIGHT_COLORS } from '@/styles/colors'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import { useSearch } from '@/components/ui/search-global/useSearch'

const BottomMenu: FC<SearchGlobalProps> = ({ style }) => {
	const { isDark } = useContext(ThemeContext)
	const { handleSearch, searchTerm, data } = useSearch()

	return (
		<Styled.View
			style={{
				...style,
				backgroundColor: isDark
					? DARK_COLORS.layout
					: LIGHT_COLORS.layout
			}}
		>
			<Feather name='search' size={16} color={getColor('silver')} />

			<Styled.TextInput
				style={{
					color: isDark ? 'rgb(28, 28, 30)' : '#fff',
					fontFamily: 'Museo Sans Cyrl 300'
				}}
				placeholder='Искать на Oxygen'
				onChangeText={handleSearch}
				value={searchTerm}
				keyboardType='web-search'
			/>
		</Styled.View>
	)
}

export default BottomMenu
