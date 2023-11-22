import React, { FC } from 'react'
import { IBanner } from '@/shared/types/banner.interface'
import { getMediaSource } from '@/shared/getMediaSource'
import Styled from './carousel-item.styles'

interface CarouselProps {
	banner: IBanner
}

const CarouselItem: FC<CarouselProps> = ({ banner }) => {
	return (
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
	)
}

export default CarouselItem
