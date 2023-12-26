import { FC } from 'react'
import { CustomScrollViewProps } from '@/components/ui/layout/custom-scroll-view/custom-scroll-view.interface'
import { ScrollView, View } from 'react-native'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'

const CustomScrollView: FC<CustomScrollViewProps> = ({
	style,
	children,
	...rest
}) => {
	const { height } = useSafeAreaFrame()
	const { top, bottom } = useSafeAreaInsets()

	const scrollViewHeight = height - 112 - top - bottom

	return (
		<View style={{ maxHeight: scrollViewHeight }}>
			<ScrollView
				bounces={true}
				style={style}
				contentContainerStyle={{
					paddingTop: 10
				}}
				{...rest}
			>
				{children}
			</ScrollView>
		</View>
	)
}

export default CustomScrollView
