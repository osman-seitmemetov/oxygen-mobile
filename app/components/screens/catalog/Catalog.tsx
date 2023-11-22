import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { HeaderSearch, Layout, Loader, Section } from '@/components/ui'
import CategoryItem from '@/components/screens/catalog/category-item/CategoryItem'
import { useCategories } from '@/components/screens/catalog/useCategories'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'

const Catalog: FC = () => {
	const { categories, isCategoriesLoading } = useCategories()
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
					<Section>
						<View
							style={{
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								flexDirection: 'row'
							}}
						>
							{isCategoriesLoading ? (
								<Loader />
							) : (
								categories &&
								categories.map((category, index) => (
									<CategoryItem
										key={category.id}
										category={category}
										style={{ width: '48%' }}
										index={index}
									/>
								))
							)}
						</View>
					</Section>
				</ScrollView>
			</View>
		</Layout>
	)
}

export default Catalog
