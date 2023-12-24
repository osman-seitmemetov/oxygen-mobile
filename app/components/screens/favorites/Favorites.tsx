import React, { FC } from 'react'
import { Layout, Loader, Section } from '@/components/ui'
import Heading from '@/components/ui/layout/heading/Heading'
import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { View } from 'react-native'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'
import ProductCard from '@/components/ui/product-card/ProductCard'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import FavoritesEmpty from '@/components/screens/favorites/FavoritesEmpty'

const Favorites: FC = () => {
	const { favorites, isFavoritesLoading } = useFavorites()
	const { height } = useSafeAreaFrame()
	const { top, bottom } = useSafeAreaInsets()
	const itemsHeight = height - 55 - 60 - 15 - top - bottom

	return (
		<Layout>
			<Heading title='Избранное' />

			<CustomScrollView
				style={{
					height: itemsHeight
				}}
			>
				{isFavoritesLoading ? (
					<Loader />
				) : favorites && favorites.items.length > 0 ? (
					favorites.items.map((favorite, index) => (
						<Section>
							<View
								style={{
									flexWrap: 'wrap',
									justifyContent: 'space-between',
									flexDirection: 'row'
								}}
							>
								<ProductCard
									index={index}
									style={{ width: '49%' }}
									product={favorite.product}
									key={favorite.id}
								/>
							</View>
						</Section>
					))
				) : (
					<FavoritesEmpty />
				)}
			</CustomScrollView>
		</Layout>
	)
}

export default Favorites
