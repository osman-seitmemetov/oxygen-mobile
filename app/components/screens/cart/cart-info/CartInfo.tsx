import React, { FC } from 'react'
import { PrimaryButton, Section } from '@/components/ui'
import { Text, View } from 'react-native'
import Styled from './cart-info.styles'
import { declensions } from '@/shared/declensions'
import { getFont } from '@/shared/fonts'

interface CartInfoProps {
	count: number
	sum: number
}

const CartInfo: FC<CartInfoProps> = ({ count }) => {
	return (
		<Section>
			<Styled.CartInfoHead>
				<Styled.Title style={[getFont('Museo Sans Cyrl 700')]}>
					Ваша корзина
				</Styled.Title>

				<Styled.Brief style={[getFont('Museo Sans Cyrl 500')]}>
					{count} {declensions(count, ['Товар', 'Товара', 'Товаров'])}
				</Styled.Brief>
			</Styled.CartInfoHead>

			<View
			// action="cart/order"
			// className={`${style.form} ${style.result}`}
			>
				<View
				// className={style.form__data}
				>
					<Text>
						Количество единиц:
						<Text>{count}</Text>
					</Text>
				</View>

				<View
				// className={style.form__data}
				>
					<Text>
						Тип заказа:
						<Text>бандероль</Text>
					</Text>
				</View>

				<View
				// className={style.form__data}
				>
					<Text>
						Сумма заказа:
						<Text>34 000 тг.</Text>
					</Text>
				</View>

				<View
				// className={style.form__data}
				>
					<Text>
						Промокод:
						<Text style={{ color: '#EE4029' }}>-3 000 тг.</Text>
					</Text>
				</View>

				<View
				// className={style.form__data}
				>
					<Text>
						Cтоимость доставки:
						<Text>1 500 тг.</Text>
					</Text>
				</View>

				<View
				// className={style.form__result}
				>
					<Text
					// className={style.form__sum}
					>
						Итого: 32 500 тг.
					</Text>
				</View>
			</View>

			<PrimaryButton>Перейти к оформлению</PrimaryButton>
		</Section>
	)
}

export default CartInfo
