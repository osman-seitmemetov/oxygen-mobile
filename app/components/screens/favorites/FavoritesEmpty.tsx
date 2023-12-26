import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'
import { getFont } from '@/shared/fonts'

const FavoritesEmpty: FC = () => {
	return (
		<View
			style={{
				paddingHorizontal: 10,
				marginTop: 70,
				alignItems: 'center'
			}}
		>
			<Image
				style={{ width: 320, height: 390 }}
				source={require('../../../assets/wishlist-empty.png')}
				transition={1000}
			/>

			<Text
				style={[
					getFont('Museo Sans Cyrl 900'),
					{
						fontSize: 28,
						textAlign: 'center',
						marginTop: -30
					}
				]}
			>
				В избранном пусто
			</Text>

			<Text
				style={[
					getFont('Museo Sans Cyrl 700'),
					{
						fontSize: 16,
						textAlign: 'center',
						marginTop: 10
					}
				]}
			>
				Добавляйте товары с помощью ♥
			</Text>
		</View>
	)
}

export default FavoritesEmpty
