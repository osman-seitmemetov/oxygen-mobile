import React, { FC, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { HeaderSearch, Layout, Loader, Section } from '@/components/ui'
import {
	useSafeAreaFrame,
	useSafeAreaInsets
} from 'react-native-safe-area-context'
import Styled from './category.styles'
import { Ionicons } from '@expo/vector-icons'
import { useForm } from 'react-hook-form'
import { IProductsFilterFields } from '@/components/screens/category/category.interface'
import { useProductsForCategories } from '@/components/screens/category/useProductsForCategories'
import ProductCard from '@/components/ui/product-card/ProductCard'
import SkeletonLoader from 'expo-skeleton-loader'
import ProductsEmpty from '@/components/screens/category/ProductsEmpty'
import { getFont } from '@/shared/fonts'

const Search: FC = () => {
	const { height } = useSafeAreaFrame()
	const { top, bottom } = useSafeAreaInsets()

	const itemsHeight = height - 55 - 60 - 15 - top - bottom

	const productsFilterForm = useForm<IProductsFilterFields>({
		mode: 'onChange'
	})

	useEffect(() => {
		productsFilterForm.setValue('sort', 'increase')
	}, [])

	const typeIds = productsFilterForm.watch('typeIds')
	const brandIds = productsFilterForm.watch('brandIds')
	const sort = productsFilterForm.watch('sort')
	const priceMin = productsFilterForm.watch('priceMin')
	const priceMax = productsFilterForm.watch('priceMax')
	const parameters = productsFilterForm.watch('parameters')

	const productsFilterFormValues: IProductsFilterFields = {
		typeIds,
		brandIds,
		sort,
		priceMin,
		priceMax,
		parameters
	}
	console.log('productsFilterFormValues', productsFilterFormValues)

	const {
		category,
		isCategoryLoading,
		products,
		setProductsFilterFormValues
	} = useProductsForCategories()

	useEffect(() => {
		setProductsFilterFormValues(productsFilterFormValues)
	}, [typeIds, brandIds, sort, priceMin, priceMax, parameters])

	const size = 100

	return (
		<Layout>
			<HeaderSearch isHasBack />

			<ScrollView
				style={{
					height: itemsHeight - 100,
					paddingTop: 10,
					paddingBottom: 10
				}}
			>
				{isCategoryLoading ? (
					// <Loader />
					<SkeletonLoader>
						<SkeletonLoader.Container
							style={[{ flex: 1, flexDirection: 'row' }]}
						>
							<SkeletonLoader.Item
								style={{
									width: size,
									height: size,
									borderRadius: size / 2,
									marginRight: 20
								}}
							/>
							<SkeletonLoader.Container
								style={{ paddingVertical: 10 }}
							>
								<SkeletonLoader.Item
									style={{
										width: 220,
										height: 20,
										marginBottom: 5
									}}
								/>
								<SkeletonLoader.Item
									style={{ width: 150, height: 20 }}
								/>
							</SkeletonLoader.Container>
						</SkeletonLoader.Container>
					</SkeletonLoader>
				) : (
					category && (
						<>
							<Section>
								<Styled.Title
									style={[getFont('Museo Sans Cyrl 900')]}
								>
									{category.name}
								</Styled.Title>

								<Styled.Options>
									<Text
										style={[getFont('Museo Sans Cyrl 700')]}
									>
										Популярные
									</Text>

									<Styled.FilterButton>
										<Ionicons
											name='ios-options-outline'
											size={26}
											color='black'
										/>
									</Styled.FilterButton>
								</Styled.Options>
							</Section>

							{isCategoryLoading ? (
								<Loader />
							) : products ? (
								products.length > 0 ? (
									<Section>
										<View
											style={{
												flexWrap: 'wrap',
												justifyContent: 'space-between',
												flexDirection: 'row'
											}}
										>
											{products?.map((product, index) => (
												<ProductCard
													index={index}
													style={{ width: '48%' }}
													key={product.id}
													product={product}
												/>
											))}
										</View>
									</Section>
								) : (
									<ProductsEmpty />
								)
							) : (
								<ProductsEmpty />
							)}

							{/*<ActionSheet id='abc'>*/}
							{/*	<View>*/}
							{/*		<Text>Hello World</Text>*/}
							{/*	</View>*/}
							{/*</ActionSheet>*/}
						</>
					)
				)}
			</ScrollView>
		</Layout>
	)
}

export default Search
