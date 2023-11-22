import { FC, PropsWithChildren } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'

interface LayoutProps {
	isHasPaddingX?: boolean
	isHasPaddingTop?: boolean
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
	children,
	isHasPaddingX,
	isHasPaddingTop
}) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<>
			{isHasPaddingTop ? (
				<SafeAreaView
					style={{
						flex: 1,
						paddingHorizontal: isHasPaddingX ? 15 : 0
					}}
				>
					{children}
				</SafeAreaView>
			) : (
				<View
					style={{
						flex: 1,
						paddingHorizontal: isHasPaddingX ? 15 : 0,
						paddingBottom: bottom
					}}
				>
					{children}
				</View>
			)}
		</>
	)
}

export default Layout
