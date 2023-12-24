import { FC } from 'react'
import { CustomScrollViewProps } from '@/components/ui/layout/custom-scroll-view/custom-scroll-view.interface'
import { ScrollView } from 'react-native'

const CustomScrollView: FC<CustomScrollViewProps> = ({
	style,
	children,
	...rest
}) => {
	return (
		<ScrollView
			style={[{ paddingVertical: 15, marginTop: -5 }, style]}
			{...rest}
		>
			{children}
		</ScrollView>
	)
}

export default CustomScrollView
