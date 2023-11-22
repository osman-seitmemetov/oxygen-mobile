import React, { FC } from 'react'
import { PrimaryButton, SecondaryButton, Section } from '@/components/ui'
import { Text, View } from 'react-native'

interface CartInfoProps {
	count: number
	sum: number
}

const CartInfo: FC<CartInfoProps> = ({ count }) => {
	return (
		<Section
		// className={style.info}
		>
			{/*Переделать форму оплаты и все шаги*/}
			<View
			// action="cart/order"
			// className={`${style.form} ${style.result}`}
			>
				<PrimaryButton>Оформить заказ</PrimaryButton>

				<SecondaryButton>Использовать промокод</SecondaryButton>

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

			<Text
			// className={style.info__label}
			>
				Минимальная сумма заказа: 4 000 тг.
			</Text>
		</Section>
	)
}

export default CartInfo
