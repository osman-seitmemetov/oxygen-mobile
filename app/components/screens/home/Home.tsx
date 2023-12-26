import React, { FC } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
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
import { getFont } from '@/shared/fonts'
import { Feather } from '@expo/vector-icons'
import { getColor } from '@/styles/colors'
import ProductListLoader from '@/components/screens/home/ProductListLoader'

const Home: FC = () => {
	const { banners, isLoading } = useBanners()
	const { products } = useProducts()

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
								marginBottom: 15,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							<Text
								style={[
									getFont('Museo Sans Cyrl 900'),
									{
										fontSize: 24
									}
								]}
							>
								Распродажа🔥
							</Text>

							<TouchableOpacity
								activeOpacity={0.7}
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									backgroundColor: getColor('dodgerBlue'),
									padding: 5,
									borderRadius: 6
								}}
							>
								<Text
									style={[
										getFont('Museo Sans Cyrl 900'),
										{
											fontSize: 14,
											color: getColor('azureRadiance')
										}
									]}
								>
									Смотреть все
								</Text>

								<Feather
									color={getColor('azureRadiance')}
									name='chevron-right'
									size={18}
								/>
							</TouchableOpacity>
						</View>

						{isLoading ? (
							<ProductListLoader />
						) : (
							products &&
							products.length > 0 && (
								<View
									style={{
										flexWrap: 'wrap',
										justifyContent: 'space-between',
										flexDirection: 'row'
									}}
								>
									{products.map((product, index) => (
										<ProductCard
											index={index}
											style={{ width: '49%' }}
											product={product}
											key={product.id}
										/>
									))}
								</View>
							)
						)}
					</Section>

					<Section>
						<View
							style={{
								marginBottom: 15,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							<Text
								style={[
									getFont('Museo Sans Cyrl 900'),
									{
										fontSize: 24
									}
								]}
							>
								Хиты продаж 💯
							</Text>

							<TouchableOpacity
								activeOpacity={0.7}
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									backgroundColor: getColor('dodgerBlue'),
									padding: 5,
									borderRadius: 6
								}}
							>
								<Text
									style={[
										getFont('Museo Sans Cyrl 900'),
										{
											fontSize: 14,
											color: getColor('azureRadiance')
										}
									]}
								>
									Смотреть все
								</Text>

								<Feather
									color={getColor('azureRadiance')}
									name='chevron-right'
									size={18}
								/>
							</TouchableOpacity>
						</View>

						{isLoading ? (
							<ProductListLoader />
						) : (
							products &&
							products.length > 0 && (
								<View
									style={{
										flexWrap: 'wrap',
										justifyContent: 'space-between',
										flexDirection: 'row'
									}}
								>
									{products.map((product, index) => (
										<ProductCard
											index={index}
											style={{ width: '49%' }}
											product={product}
											key={product.id}
										/>
									))}
								</View>
							)
						)}
					</Section>

					<Section>
						<View
							style={{
								marginBottom: 15,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							<Text
								style={[
									getFont('Museo Sans Cyrl 900'),
									{
										fontSize: 24
									}
								]}
							>
								Новинки 🆕
							</Text>

							<TouchableOpacity
								activeOpacity={0.7}
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									backgroundColor: getColor('dodgerBlue'),
									padding: 5,
									borderRadius: 6
								}}
							>
								<Text
									style={[
										getFont('Museo Sans Cyrl 900'),
										{
											fontSize: 14,
											color: getColor('azureRadiance')
										}
									]}
								>
									Смотреть все
								</Text>

								<Feather
									color={getColor('azureRadiance')}
									name='chevron-right'
									size={18}
								/>
							</TouchableOpacity>
						</View>

						{isLoading ? (
							<ProductListLoader />
						) : (
							products &&
							products.length > 0 && (
								<View
									style={{
										flexWrap: 'wrap',
										justifyContent: 'space-between',
										flexDirection: 'row'
									}}
								>
									{products.map((product, index) => (
										<ProductCard
											index={index}
											style={{ width: '49%' }}
											product={product}
											key={product.id}
										/>
									))}
								</View>
							)
						)}
					</Section>
				</CustomScrollView>
			</DismissKeyboard>
		</Layout>
	)
}

export default Home
