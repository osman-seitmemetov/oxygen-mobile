import React, { FC, useRef } from 'react'
import { Animated, Platform, View } from 'react-native'
import { IBanner } from '@/shared/types/banner.interface'
import CarouselItemAnimated from '@/components/screens/home/carousel-animated/carousel-item-animated/CarouselItemAnimated'
import {
	EMPTY_ITEM_SIZE,
	ITEM_SIZE
} from '@/components/screens/home/carousel-animated/carousel-item-animated/carousel-item-animated.constants'

const CarouselAnimated: FC<{ banners: IBanner[] }> = ({ banners }) => {
	const scrollX = useRef(new Animated.Value(0)).current

	return (
		<View>
			<Animated.FlatList
				data={[
					{ id: -1 } as IBanner,
					...banners,
					{ id: -2 } as IBanner
				]}
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal
				removeClippedSubviews
				renderToHardwareTextureAndroid
				scrollEventThrottle={16}
				snapToInterval={ITEM_SIZE}
				snapToAlignment='start'
				decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				renderItem={({ item: banner, index }) =>
					banner.img ? (
						<CarouselItemAnimated
							banner={banner}
							index={index}
							scrollX={scrollX}
						/>
					) : (
						<View style={{ width: EMPTY_ITEM_SIZE }} />
					)
				}
			/>
		</View>
	)
}

export default CarouselAnimated
