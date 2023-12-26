import React, { FC } from 'react'
import { View } from 'react-native'
import { HeaderSearch, Layout } from '@/components/ui'
import CatalogItem from '@/components/screens/catalog/catalog-item/CatalogItem'
import { useCatalogItems } from '@/components/screens/catalog/useCatalogItems'
import CatalogLoader from '@/components/screens/catalog/catalog-loader/CatalogLoader'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'

const Catalog: FC = () => {
	const { catalogItems, isCatalogItemsLoading } = useCatalogItems()

	return (
		<Layout>
			<View>
				<HeaderSearch isHasBack />

				<CustomScrollView>
					{isCatalogItemsLoading ? (
						<CatalogLoader />
					) : (
						catalogItems &&
						catalogItems
							.sort((a, b) =>
								b.parent.name.localeCompare(a.parent.name)
							)
							.map(catalogItem => (
								<CatalogItem
									key={catalogItem.parent.id}
									catalogItem={catalogItem}
								/>
							))
					)}
				</CustomScrollView>
			</View>
		</Layout>
	)
}

export default Catalog
