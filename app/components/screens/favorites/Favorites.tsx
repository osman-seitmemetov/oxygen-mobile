import React, { FC } from 'react'
import { Layout, Loader, Section } from '@/components/ui'
import Heading from '@/components/ui/layout/heading/Heading'
import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { View } from 'react-native'
import ProductCard from '@/components/ui/product-card/ProductCard'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import FavoritesEmpty from '@/components/screens/favorites/FavoritesEmpty'

const Favorites: FC = () => {
	const { favorites, isFavoritesLoading } = useFavorites()

	return (
		<Layout>
			<Heading title='Избранное' />

			<CustomScrollView>
				{isFavoritesLoading ? (
					<Loader />
				) : favorites && favorites.items.length > 0 ? (
					favorites.items.map((favorite, index) => (
						<Section key={favorite.id}>
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
