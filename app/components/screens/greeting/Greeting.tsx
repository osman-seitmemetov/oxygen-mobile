import React, { FC } from 'react'
import { Layout } from '@/components/ui'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'
import { getFont } from '@/shared/fonts'
import Styled from './greeting.styles'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Greeting: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<Layout>
			<View
				style={{
					paddingHorizontal: 10,
					marginTop: 150,
					alignItems: 'center'
				}}
			>
				<Image
					style={{ width: 340, height: 315 }}
					source={require('../../../assets/warning.png')}
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
					Внимание!
				</Text>

				<Text
					style={[
						getFont('Museo Sans Cyrl 700'),
						{
							fontSize: 18,
							textAlign: 'center',
							marginTop: 10
						}
					]}
				>
					Высокий шанс словить передоз от классного дизайна 😉
				</Text>

				<Styled.Button
					activeOpacity={0.7}
					onPress={() => navigate('Home')}
				>
					<Styled.ButtonText style={[getFont('Museo Sans Cyrl 700')]}>
						Все-равно продолжить
					</Styled.ButtonText>
				</Styled.Button>
			</View>
		</Layout>
	)
}

export default Greeting
