import React, { FC } from 'react'
import { IBanner } from '@/shared/types/banner.interface'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled, { styles } from './carousel-item.styles'
import { Image } from 'expo-image'

interface CarouselProps {
	banner: IBanner
}

const CarouselItem: FC<CarouselProps> = ({ banner }) => {
	return (
		<Styled.Banner>
			<Image
				//@ts-ignore
				style={styles.image}
				source={getMediaSource(banner.img)}
				contentFit='cover'
				transition={1000}
			/>
		</Styled.Banner>
	)
}

export default CarouselItem
