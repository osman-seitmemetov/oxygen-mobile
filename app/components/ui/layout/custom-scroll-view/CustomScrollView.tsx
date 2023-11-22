import { FC } from 'react'
import { CustomScrollViewProps } from '@/components/ui/layout/custom-scroll-view/custom-scroll-view.interface'
import { ScrollView } from 'react-native'

const CustomScrollView: FC<CustomScrollViewProps> = ({ style, children }) => {
	return (
		<ScrollView style={[style, { paddingVertical: 15, marginTop: -5 }]}>
			{children}
		</ScrollView>
	)
}

export default CustomScrollView
