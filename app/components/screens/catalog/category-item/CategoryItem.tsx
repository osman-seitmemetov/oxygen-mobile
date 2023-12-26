import React, { FC } from 'react'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled, { styles } from './category-item.styles'
import { Pressable, ViewStyle } from 'react-native'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useMovieItemAnimation } from '@/hooks/useCardAnimation'
import Animated from 'react-native-reanimated'
import { getFont } from '@/shared/fonts'
import { Image } from 'expo-image'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

interface CatalogProps {
	category: {
		id: number
		name: string
		img: string
		order: number
	}
	index: number
	style?: ViewStyle
}

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

const CategoryItem: FC<CatalogProps> = ({ category, style, index }) => {
	const { navigate } = useTypedNavigation()
	const { styleAnimation } = useMovieItemAnimation(index, style)
	const { width } = useSafeAreaFrame()

	return (
		<ReanimatedPressable key={category.id} style={styleAnimation}>
			<Styled.Item
				onPress={() =>
					navigate('Category', {
						id: category.id
					})
				}
			>
				{category.img ? (
					<Image
						style={[
							styles.img,
							{ width: width * 0.28, marginTop: -70 }
						]}
						source={getMediaSource(category.img)}
						alt={category.name}
						contentFit='contain'
						transition={1000}
					/>
				) : (
					<Styled.NoImg />
				)}
				<Styled.Title style={[getFont('Museo Sans Cyrl 900')]}>
					{category.name}
				</Styled.Title>
			</Styled.Item>
		</ReanimatedPressable>
	)
}

export default CategoryItem
