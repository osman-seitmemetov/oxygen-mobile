import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { IBanner } from '@/shared/types/banner.interface'
import CarouselItem from './carousel-item/CarouselItem'

const Carousel: FC<{ banners: IBanner[] }> = ({ banners }) => {
	return (
		<View>
			<FlatList
				style={{ marginBottom: 10 }}
				data={banners}
				snapToAlignment='start'
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={{ paddingLeft: 10 }}
				renderToHardwareTextureAndroid
				scrollEventThrottle={16}
				renderItem={({ item: banner }) => (
					<CarouselItem banner={banner} />
				)}
			/>
		</View>
	)
}

export default Carousel
