import React, { FC } from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import { useFavoriteAnimation } from './useFavoriteAnimation'
import Animated, { withSpring } from 'react-native-reanimated'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { getColor } from '@/styles/colors'
import { useFavorite } from '@/components/ui/product-card/favorite-button/useFavorite'

interface FavoriteButtonProps {
	productId: number
	isSmall?: boolean
	style?: ViewStyle
	withoutBG?: boolean
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
	isSmall,
	style,
	productId,
	withoutBG
}) => {
	const { isSmashed, addToFavorites, removeFromFavorites } =
		useFavorite(productId)
	const { outlineStyle, fillStyle, liked } = useFavoriteAnimation(isSmashed)

	const pressHandler = () => {
		liked.value = withSpring(liked.value === 1 ? 0 : 1)
		if (isSmashed) removeFromFavorites()
		else addToFavorites()
	}

	const BGColor = withoutBG ? 'transparent' : getColor('mineShaft')
	const BGSize = isSmall ? (withoutBG ? 24 : 30) : withoutBG ? 28 : 34
	const iconSize = isSmall ? (withoutBG ? 24 : 20) : withoutBG ? 28 : 24

	return (
		<View
			style={[
				{
					zIndex: 6,
					borderRadius: 8,
					width: BGSize,
					height: BGSize,
					backgroundColor: BGColor
				},
				style
			]}
		>
			<Pressable
				onPress={pressHandler}
				style={{
					position: 'relative',
					marginLeft: withoutBG ? 0 : 5,
					marginTop: withoutBG ? 0 : 5
				}}
			>
				<Animated.View
					style={[
						{
							position: 'absolute'
						},
						outlineStyle
					]}
				>
					<MaterialCommunityIcons
						name='heart'
						size={iconSize}
						color='white'
					/>
				</Animated.View>

				<Animated.View
					style={[
						{
							position: 'absolute'
						},
						fillStyle
					]}
				>
					<MaterialCommunityIcons
						name='heart'
						size={iconSize}
						color={getColor('crimson')}
					/>
				</Animated.View>
			</Pressable>
		</View>
	)
}

export default FavoriteButton
