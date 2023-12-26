import React, { FC } from 'react'
import { IBanner } from '@/shared/types/banner.interface'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled, { styles } from './carousel-item.styles'
import { Image } from 'expo-image'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

interface CarouselProps {
	banner: IBanner
}

const CarouselItem: FC<CarouselProps> = ({ banner }) => {
	const { width } = useSafeAreaFrame()

	return (
		<Styled.Banner style={{ width: width - 20 }}>
			<Image
				style={styles.image}
				source={getMediaSource(banner.img)}
				contentFit='cover'
				transition={1000}
			/>
		</Styled.Banner>
	)
}

export default CarouselItem
