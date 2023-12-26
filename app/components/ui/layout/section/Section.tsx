import { FC, ReactNode, useContext } from 'react'
import Styled from './section.styles'
import { ViewStyle } from 'react-native'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import { getFont } from '@/shared/fonts'

interface BottomMenuProps {
	children?: ReactNode
	style?: ViewStyle
	title?: string
	fixedInBottom?: boolean
}

const Section: FC<BottomMenuProps> = ({
	children,
	style,
	title,
	fixedInBottom
}) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<Styled.Section
			style={{
				...style,
				position: fixedInBottom ? 'absolute' : 'relative',
				borderBottomLeftRadius: fixedInBottom ? 0 : 10,
				borderBottomRightRadius: fixedInBottom ? 0 : 10,
				borderTopLeftRadius: 10,
				borderTopRightRadius: 10,

				backgroundColor: isDark ? 'rgb(28, 28, 30)' : '#fff'
			}}
		>
			{title && (
				<Styled.Title style={[getFont('Museo Sans Cyrl 700')]}>
					{title}
				</Styled.Title>
			)}
			{children}
		</Styled.Section>
	)
}

export default Section
