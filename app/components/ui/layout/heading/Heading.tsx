import React, { FC, useContext } from 'react'
import { HeadingProps } from './heading.interface'
import Styled from './heading.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import { Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Heading: FC<HeadingProps> = ({ title, isHasBack }) => {
	const { top } = useSafeAreaInsets()
	const { isDark } = useContext(ThemeContext)
	const { goBack } = useTypedNavigation()

	return (
		<Styled.View
			style={{
				padding: 10,
				paddingTop: top + 10,
				backgroundColor: isDark ? 'rgb(28, 28, 30)' : '#fff',
				height: 60 + top,
				justifyContent: isHasBack ? 'space-between' : 'center'
			}}
		>
			{isHasBack && (
				<Pressable onPress={goBack}>
					<MaterialIcons name='chevron-left' size={32} />
				</Pressable>
			)}

			<Styled.Text numberOfLines={1}>{title}</Styled.Text>

			{isHasBack && (
				<MaterialIcons
					style={{ opacity: 0 }}
					name='chevron-left'
					size={32}
				/>
			)}
		</Styled.View>
	)
}

export default Heading
