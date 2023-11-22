import React, { FC } from 'react'
import { ICategory } from '@/shared/types/category.interface'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled from './category-item.styles'
import { Pressable, ViewStyle } from 'react-native'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useMovieItemAnimation } from '@/hooks/useCardAnimation'
import Animated from 'react-native-reanimated'

interface CatalogProps {
	category: ICategory
	index: number
	style?: ViewStyle
}

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

const Catalog: FC<CatalogProps> = ({ category, style, index }) => {
	const { navigate } = useTypedNavigation()
	const { styleAnimation } = useMovieItemAnimation(index, style)

	return (
		<ReanimatedPressable style={styleAnimation}>
			<Styled.Item
				onPress={() =>
					navigate('Category', {
						id: category.id
					})
				}
			>
				{category.img ? (
					<Styled.Img
						width={150}
						height={150}
						source={getMediaSource(category.img)}
						alt={category.name}
					/>
				) : (
					<Styled.NoImg />
				)}
				<Styled.Title>{category.name}</Styled.Title>
			</Styled.Item>
		</ReanimatedPressable>
	)
}

export default Catalog
