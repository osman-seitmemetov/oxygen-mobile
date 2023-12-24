import React, { FC } from 'react'
import { Platform, View } from 'react-native'
import { useBanners } from './useBanners'
import { useProducts } from './useProducts'
import {
	DismissKeyboard,
	HeaderSearch,
	Layout,
	Loader,
	Section
} from '@/components/ui'
import CarouselAnimated from '@/components/screens/home/carousel-animated/CarouselAnimated'
import Carouse from '@/components/screens/home/carousel/Carousel'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import ProductCard from '@/components/ui/product-card/ProductCard'

const Home: FC = () => {
	const { banners, isLoading } = useBanners()
	const { products, isLoading: isProductsLoading } = useProducts()

	return (
		<Layout>
			<DismissKeyboard>
				<HeaderSearch />

				<CustomScrollView>
					<View>
						{isLoading ? (
							<Loader />
						) : banners?.length ? (
							Platform.OS === 'ios' ? (
								<CarouselAnimated banners={banners} />
							) : (
								<Carouse banners={banners} />
							)
						) : (
							''
						)}
					</View>

					<Section>
						<View
							style={{
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								flexDirection: 'row'
							}}
						>
							{isLoading ? (
								<Loader />
							) : (
								products &&
								products.map((product, index) => (
									<ProductCard
										index={index}
										style={{ width: '49%' }}
										product={product}
										key={product.id}
									/>
								))
							)}
						</View>
					</Section>

					<Section>
						<View
							style={{
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								flexDirection: 'row'
							}}
						>
							{isLoading ? (
								<Loader />
							) : (
								products &&
								products.map((product, index) => (
									<ProductCard
										index={index}
										style={{ width: '49%' }}
										product={product}
										key={product.id}
									/>
								))
							)}
						</View>
					</Section>

					<Section>
						<View
							style={{
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								flexDirection: 'row'
							}}
						>
							{isLoading ? (
								<Loader />
							) : (
								products &&
								products.map((product, index) => (
									<ProductCard
										index={index}
										style={{ width: '49%' }}
										product={product}
										key={product.id}
									/>
								))
							)}
						</View>
					</Section>
				</CustomScrollView>
			</DismissKeyboard>
		</Layout>
	)
}

export default Home
