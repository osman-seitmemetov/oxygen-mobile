import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { HeaderSearch, Layout, Section } from '@/components/ui'
import CategoryItem from '@/components/screens/catalog/category-item/CategoryItem'
import { useCategories } from '@/components/screens/catalog/useCategories'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'
import CatalogLoader from '@/components/screens/catalog/catalog-loader/CatalogLoader'

const Catalog: FC = () => {
	const { categories, isCategoriesLoading } = useCategories()
	const { height } = useSafeAreaFrame()
	const { top, bottom } = useSafeAreaInsets()

	const itemsHeight = height - 110 - top - bottom

	return (
		<Layout>
			<View>
				<HeaderSearch isHasBack />

				<ScrollView
					style={{
						height: itemsHeight,
						paddingTop: 10
					}}
				>
					<Section>
						{isCategoriesLoading ? (
							<CatalogLoader />
						) : (
							<View
								style={{
									flexWrap: 'wrap',
									justifyContent: 'space-between',
									flexDirection: 'row'
								}}
							>
								{categories &&
									categories.map((category, index) => (
										<CategoryItem
											key={category.id}
											category={category}
											style={{ width: '48%' }}
											index={index}
										/>
									))}
							</View>
						)}
					</Section>
				</ScrollView>
			</View>
		</Layout>
	)
}

export default Catalog
