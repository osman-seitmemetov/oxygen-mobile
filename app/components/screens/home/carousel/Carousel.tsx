import React, { FC } from 'react'
import { IBanner } from '@/shared/types/banner.interface'
import CarouselItem from './carousel-item/CarouselItem'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { FlashList } from '@shopify/flash-list'

const Carouse: FC<{ banners: IBanner[] }> = ({ banners }) => {
	const { width } = useSafeAreaFrame()
	const itemWidth = width - 30

	const renderItem = ({ item }: { item: IBanner }) => (
		<CarouselItem banner={item} />
	)

	const keyExtractor = (item: IBanner) => item.id.toString()

	return (
		<FlashList
			data={banners}
			snapToAlignment='start'
			snapToInterval={itemWidth}
			estimatedItemSize={itemWidth}
			keyExtractor={keyExtractor}
			showsHorizontalScrollIndicator={false}
			horizontal
			contentContainerStyle={{ paddingLeft: 10, paddingBottom: 10 }}
			// renderToHardwareTextureAndroid
			// scrollEventThrottle={2000}
			renderItem={renderItem}
		/>
	)
}

export default Carouse
