import { FC } from 'react'
import Styled from './section-link.styles'
import { ViewStyle } from 'react-native'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { MaterialIcons } from '@expo/vector-icons'

interface BottomMenuProps {
	style?: ViewStyle
	title: string
	page: keyof TypeRootStackParamList
}

const SectionLink: FC<BottomMenuProps> = ({ style, title, page }) => {
	const { navigate } = useTypedNavigation()

	return (
		//@ts-ignore
		<Styled.SectionLink style={style} onPress={() => navigate(page)}>
			<Styled.Text>{title}</Styled.Text>
			<MaterialIcons name='chevron-right' color='#ffffff' size={24} />
		</Styled.SectionLink>
	)
}

export default SectionLink
