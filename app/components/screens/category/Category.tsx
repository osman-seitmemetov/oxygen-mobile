import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { HeaderSearch, Layout, Loader } from '@/components/ui'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'
import { useCategory } from '@/components/screens/category/useCategory'

const Category: FC = () => {
	const { category, isCategoryLoading } = useCategory()
	const { height } = useSafeAreaFrame()
	const { top, bottom } = useSafeAreaInsets()

	const itemsHeight = height - 55 - 60 - 15 - top - bottom

	return (
		<Layout>
			<View>
				<HeaderSearch isHasBack />

				<ScrollView
					style={{
						height: itemsHeight
					}}
				>
					{isCategoryLoading ? (
						<Loader />
					) : (
						category && <Text>{category.name}</Text>
					)}
				</ScrollView>
			</View>
		</Layout>
	)
}

export default Category
