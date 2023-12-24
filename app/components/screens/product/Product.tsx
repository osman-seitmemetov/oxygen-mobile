import React, { FC, useContext } from 'react'
import { View } from 'react-native'
import { Layout, Section } from '@/components/ui'
import { useProduct } from './useProduct'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled from './product.styles'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import ProductHeader from '@/components/screens/product/product-header/ProductHeader'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import RenderHTML from 'react-native-render-html'
import ProductCartButton from '@/components/screens/product/product-cart-button/ProductCartButton'
import { addThousandSeparators } from '@/shared/addThousandSeparators'
import { getFont } from '@/shared/fonts'
import ProductLoader from '@/components/screens/product/product-loader/ProductLoader'

const Product: FC = () => {
	const { isDark } = useContext(ThemeContext)
	const { product, isProductLoading } = useProduct()
	const { height, width } = useSafeAreaFrame()

	const isDiscount = product?.isDiscount && product?.newPrice

	console.log(product)

	return (
		<Layout>
			<View style={{ height }}>
				<ProductHeader productId={product?.id} />

				<CustomScrollView
					style={{
						position: 'relative',
						height: 300
					}}
				>
					{isProductLoading ? (
						<ProductLoader />
					) : (
						product && (
							<>
								<Styled.ProductHead
									style={{
										backgroundColor: isDark
											? 'rgb(28, 28, 30)'
											: '#fff'
									}}
								>
									<Styled.Img
										source={getMediaSource(product.img)}
									/>

									<Styled.Title
										style={[getFont('Museo Sans Cyrl 900')]}
									>
										{product.name}
									</Styled.Title>

									<Styled.PriceRow>
										<Styled.Price>
											<Styled.PriceText>
												{isDiscount
													? `${addThousandSeparators(
															product.newPrice
														)} ₽`
													: `${addThousandSeparators(
															product.price
														)} ₽`}
											</Styled.PriceText>
										</Styled.Price>

										{product.isDiscount && (
											<Styled.PriceDiscount>
												<Styled.PriceTextDiscount>
													{addThousandSeparators(
														product.price
													)}{' '}
													₽
												</Styled.PriceTextDiscount>
											</Styled.PriceDiscount>
										)}
									</Styled.PriceRow>

									<Styled.Count>
										Осталось: {product.count}
									</Styled.Count>
								</Styled.ProductHead>

								<ProductCartButton productId={product.id} />

								<Section
									title='Описание'
									style={{ marginTop: 10 }}
								>
									<RenderHTML
										contentWidth={width}
										baseStyle={{
											fontFamily: 'Museo Sans Cyrl 300'
										}}
										source={{
											html: product.description.includes(
												'<p>'
											)
												? product.description
												: `<p>${product.description}</p>`
										}}
										// @ts-ignore
										tagsStyles={tagsStyles}
									/>
								</Section>
							</>
						)
					)}
				</CustomScrollView>
			</View>
		</Layout>
	)
}

const tagsStyles = {
	body: {
		color: 'white',
		fontSize: 17,
		fontWeight: '400',
		fontFamily: 'Museo Sans Cyrl 300'
	}
}

export default Product
