import React, { FC } from 'react'
import { Animated, View } from 'react-native'
import { IBanner } from '@/shared/types/banner.interface'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled from './carousel-item-animated.styles'
import { useItemAnimation } from './useItemAnimation'
import { ITEM_SIZE, SPACING } from './carousel-item-animated.constants'

interface CarouselProps {
	index: number
	scrollX: Animated.Value
	banner: IBanner
}

const CarouselItemAnimated: FC<CarouselProps> = ({
	banner,
	scrollX,
	index
}) => {
	const { rotate, opacity, scale } = useItemAnimation(index, scrollX)

	return (
		<View style={{ width: ITEM_SIZE }}>
			<Animated.View
				style={{
					padding: SPACING,
					transform: [{ rotate }, { scale }],
					alignItems: 'center',
					opacity: opacity
				}}
			>
				<Styled.Banner>
					<Styled.USP
						style={{
							backgroundColor: banner.color || '#48cb7b'
						}}
					>
						<Styled.Title>{banner.title}</Styled.Title>
						<Styled.Text>{banner.text}</Styled.Text>
					</Styled.USP>

					<Styled.Image source={getMediaSource(banner.img)} />
				</Styled.Banner>
			</Animated.View>
		</View>
	)
}

export default CarouselItemAnimated
