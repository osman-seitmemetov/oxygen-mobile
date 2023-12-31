import React, { FC, useEffect } from 'react'
import { Text, View } from 'react-native'
import { HeaderSearch, Layout, Section } from '@/components/ui'
import Styled from './category.styles'
import { Ionicons } from '@expo/vector-icons'
import { useForm } from 'react-hook-form'
import { IProductsFilterFields } from '@/components/screens/category/category.interface'
import { useProductsForCategories } from '@/components/screens/category/useProductsForCategories'
import ProductCard from '@/components/ui/product-card/ProductCard'
import SkeletonLoader from 'expo-skeleton-loader'
import ProductsEmpty from '@/components/screens/category/ProductsEmpty'
import { getFont } from '@/shared/fonts'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import ProductListLoader from '@/components/screens/home/ProductListLoader'

const Category: FC = () => {
	const { width } = useSafeAreaFrame()

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
		isProductsLoading,
		products,
		setProductsFilterFormValues
	} = useProductsForCategories()

	useEffect(() => {
		setProductsFilterFormValues(productsFilterFormValues)
	}, [typeIds, brandIds, sort, priceMin, priceMax, parameters])

	return (
		<Layout>
			<HeaderSearch isHasBack />

			<CustomScrollView>
				{isCategoryLoading ? (
					<>
						<SkeletonLoader>
							<SkeletonLoader.Item
								style={{
									width,
									height: 50,
									borderRadius: 10,
									marginRight: 20,
									marginBottom: 10
								}}
							/>
						</SkeletonLoader>

						<Section>
							<ProductListLoader />
						</Section>
					</>
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

							{isCategoryLoading || isProductsLoading ? (
								<Section>
									<ProductListLoader />
								</Section>
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
													style={{ width: '49%' }}
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
			</CustomScrollView>
		</Layout>
	)
}

export default Category
