import React, { FC } from 'react'
import Styled, { styles } from './cart-item.styles'
import { Pressable, View } from 'react-native'
import { getMediaSource } from '@/shared/getMediaSource'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { CartItemProps } from '@/components/screens/cart/cart-item/cart-item.interface'
import { Image } from 'expo-image'
import { addThousandSeparators } from '@/shared/addThousandSeparators'
import FavoriteButton from '@/components/ui/product-card/favorite-button/FavoriteButton'
import { Section } from '@/components/ui'
import { Ionicons } from '@expo/vector-icons'
import Counter from '@/components/ui/counter/Counter'
import { useCartItem } from '@/components/screens/cart/cart-item/useCartItem'
import { getFont } from '@/shared/fonts'

const CartItem: FC<CartItemProps> = ({ cartProduct }) => {
	const { navigate } = useTypedNavigation()

	const isDiscount =
		cartProduct.product.isDiscount && cartProduct.product.newPrice

	const { removeFromCart, changeCount } = useCartItem(
		cartProduct.id,
		cartProduct.count,
		cartProduct.product.id
	)

	return (
		<Section>
			<Styled.Info>
				<Pressable
					onPress={() =>
						navigate('Product', { id: cartProduct.product.id })
					}
				>
					<Image
						style={styles.image}
						source={getMediaSource(cartProduct.product.img)}
						contentFit='contain'
						transition={1000}
					/>
				</Pressable>

				<Styled.Data>
					<Styled.PriceRow>
						<Styled.Price>
							<Styled.PriceText
								style={[getFont('Museo Sans Cyrl 700')]}
							>
								{isDiscount
									? `${addThousandSeparators(
											cartProduct.product.newPrice
										)} ₽`
									: `${addThousandSeparators(
											cartProduct.product.price
										)} ₽`}
							</Styled.PriceText>
						</Styled.Price>

						{cartProduct.product.isDiscount && (
							<Styled.PriceDiscount>
								<Styled.PriceTextDiscount
									style={[getFont('Museo Sans Cyrl 700')]}
								>
									{addThousandSeparators(
										cartProduct.product.price
									)}{' '}
									₽
								</Styled.PriceTextDiscount>
							</Styled.PriceDiscount>
						)}
					</Styled.PriceRow>

					<Pressable>
						<Styled.Title style={[getFont('Museo Sans Cyrl 700')]}>
							{cartProduct.product.name}
						</Styled.Title>
					</Pressable>

					<Styled.Count style={[getFont('Museo Sans Cyrl 300')]}>
						Осталось: {cartProduct.product.count} шт.
					</Styled.Count>
				</Styled.Data>
			</Styled.Info>

			<Styled.Actions>
				<Styled.ActionsLeft>
					<FavoriteButton productId={cartProduct.product.id} />

					<Styled.DeleteButton onPress={() => removeFromCart()}>
						<Ionicons name='trash' size={20} />
					</Styled.DeleteButton>
				</Styled.ActionsLeft>

				<View>
					<Counter
						changeCountHandler={changeCount}
						min={1}
						max={cartProduct.product.count}
						value={cartProduct.count}
					/>
				</View>
			</Styled.Actions>
		</Section>
	)
}

export default CartItem
