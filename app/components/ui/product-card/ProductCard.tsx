import React, { FC } from 'react'
import { Pressable, ViewStyle } from 'react-native'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled from './product-card.styles'
import { IProduct } from '@/shared/types/product.interface'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import FavoriteButton from './favorite-button/FavoriteButton'
import { useMovieItemAnimation } from '@/hooks/useCardAnimation'
import Animated from 'react-native-reanimated'
import { addThousandSeparators } from '@/shared/addThousandSeparators'

interface ProductCardProps {
	style?: ViewStyle
	product: IProduct
	index: number
}

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

const ProductCard: FC<ProductCardProps> = ({ product, index, style }) => {
	const { navigate } = useTypedNavigation()
	const { styleAnimation } = useMovieItemAnimation(index, style)

	const isDiscount = product?.isDiscount && product?.newPrice

	return (
		<ReanimatedPressable style={styleAnimation}>
			<Styled.Card
				style={{ position: 'relative' }}
				onPress={() =>
					navigate('Product', {
						id: product.id
					})
				}
			>
				<Styled.Top>
					<FavoriteButton
						style={{ position: 'absolute', top: 5, left: 5 }}
						isSmall
						productId={product.id}
					/>

					<Styled.Img
						source={getMediaSource(product.img)}
						alt='Товар'
						width={100}
						height={50}
					/>

					<Styled.Content>
						<Styled.PriceRow>
							<Styled.Price>
								<Styled.PriceText
									style={{
										fontFamily: 'Museo Sans Cyrl 700'
									}}
								>
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
									<Styled.PriceTextDiscount
										style={{
											fontFamily: 'Museo Sans Cyrl 500'
										}}
									>
										{addThousandSeparators(product.price)} ₽
									</Styled.PriceTextDiscount>
								</Styled.PriceDiscount>
							)}
						</Styled.PriceRow>

						<Styled.Title
							style={{ fontFamily: 'Museo Sans Cyrl 700' }}
						>
							{product.name}
						</Styled.Title>

						<Styled.Available
							style={{ fontFamily: 'Museo Sans Cyrl 500' }}
						>
							В наличии: {product.count} шт.
						</Styled.Available>

						<Styled.Weight
							style={{ fontFamily: 'Museo Sans Cyrl 500' }}
						>
							Вес: 130гр
						</Styled.Weight>
					</Styled.Content>
				</Styled.Top>
			</Styled.Card>
		</ReanimatedPressable>
	)
}

export default ProductCard
