import React, { FC } from 'react'
import { Text } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { getFont } from '@/shared/fonts'
import Styled from './cart.styles'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const CartEmpty: FC = () => {
	const { width } = useSafeAreaFrame()
	const { navigate } = useTypedNavigation()

	return (
		<Styled.Empty style={{ paddingHorizontal: 10, marginTop: 120 }}>
			<Image
				style={{ width: width - 20, height: 300 }}
				source={require('../../../assets/empty-cart.png')}
				transition={1000}
			/>

			<Text
				style={[
					getFont('Museo Sans Cyrl 900'),
					{
						fontSize: 28,
						textAlign: 'center',
						marginTop: 10
					}
				]}
			>
				Ваша корзина пуста
			</Text>

			<Styled.Button activeOpacity={0.7} onPress={() => navigate('Home')}>
				<Styled.ButtonText style={[getFont('Museo Sans Cyrl 700')]}>
					Начать покупки
				</Styled.ButtonText>
			</Styled.Button>
		</Styled.Empty>
	)
}

export default CartEmpty
