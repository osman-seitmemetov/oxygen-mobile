import React, { FC } from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled from './product-card.styles'
import { IProduct } from '@/shared/types/product.interface'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import FavoriteButton from './favorite-button/FavoriteButton'
import { useMovieItemAnimation } from '@/hooks/useCardAnimation'
import Animated from 'react-native-reanimated'

interface ProductCardProps {
	style?: ViewStyle
	product: IProduct
	index: number
}

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

const ProductCard: FC<ProductCardProps> = ({ product, index, style }) => {
	const { navigate } = useTypedNavigation()
	const { styleAnimation } = useMovieItemAnimation(index, style)

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
						style={{ position: 'absolute', top: 10, left: 10 }}
						isSmall
						productId={product.id}
					/>

					<Styled.Img
						source={getMediaSource(product.img)}
						alt='Товар'
						width={100}
						height={50}
					/>

					<Styled.Title>{product.name}</Styled.Title>

					<Styled.Available>
						В наличии: {product.count} шт.
					</Styled.Available>

					<Styled.Weight>Вес: 130гр</Styled.Weight>
				</Styled.Top>

				<Styled.Bottom>
					<Styled.Price>
						{product.isDiscount ? (
							<>
								<Styled.PriceOld>
									{product.price} руб.
								</Styled.PriceOld>

								<Styled.PriceNew>
									{product.newPrice} руб.
								</Styled.PriceNew>
							</>
						) : (
							<Text>{product.price} руб.</Text>
						)}
					</Styled.Price>
				</Styled.Bottom>
			</Styled.Card>
		</ReanimatedPressable>
	)
}

export default ProductCard
