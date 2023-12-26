import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { getFont } from '@/shared/fonts'

const ProductsEmpty: FC = () => {
	const { width } = useSafeAreaFrame()

	return (
		<View style={{ paddingHorizontal: 10, marginTop: 70 }}>
			<Image
				style={{ width: width - 20, height: 230 }}
				source={require('../../../assets/not-found.png')}
			/>

			<Text
				style={[
					getFont('Museo Sans Cyrl 900'),
					{
						fontSize: 28,
						textAlign: 'center',
						marginTop: 20
					}
				]}
			>
				Простите, по вашему запросу товаров сейчас нет.
			</Text>
		</View>
	)
}

export default ProductsEmpty
