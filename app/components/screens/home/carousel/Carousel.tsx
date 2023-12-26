import React, { FC, useRef, useState } from 'react'
import { IBanner } from '@/shared/types/banner.interface'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import CarouselItem from '@/components/screens/home/carousel/carousel-item/CarouselItem'
import { FlashList, ViewToken } from '@shopify/flash-list'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import { Section } from '@/components/ui'

const Carouse: FC<{ banners: IBanner[] }> = ({ banners }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const { width } = useSafeAreaFrame()
	const itemWidth = width

	const scrollX = useRef(new Animated.Value(0)).current

	const slidesRef = useRef(null)

	const viewableItemsChanged = useRef(
		({ viewableItems }: { viewableItems: ViewToken[] }) => {
			if (viewableItems.length > 0) {
				setCurrentIndex(viewableItems[0].index || 0)
			}
		}
	).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const renderItem = ({ item }: { item: IBanner }) => (
		<CarouselItem banner={item} />
	)

	const keyExtractor = (item: IBanner) => item.id.toString()

	return (
		<Section style={{ padding: 0 }}>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					width: width - 10,
					marginLeft: -5
				}}
			>
				<View style={{ flex: 3 }}>
					<FlashList
						data={banners}
						bounces={false}
						estimatedItemSize={itemWidth}
						keyExtractor={keyExtractor}
						showsHorizontalScrollIndicator={false}
						horizontal
						scrollEventThrottle={128}
						renderItem={renderItem}
						pagingEnabled
						onScroll={Animated.event(
							[
								{
									nativeEvent: {
										contentOffset: { x: scrollX }
									}
								}
							],
							{
								useNativeDriver: false
							}
						)}
						onViewableItemsChanged={viewableItemsChanged}
						viewabilityConfig={viewConfig}
						ref={slidesRef}
						initialScrollIndex={currentIndex}
					/>
				</View>

				<View style={styles.pagination}>
					{banners.map((_, index) => {
						const opacity = scrollX.interpolate({
							inputRange: [
								(index - 1) * width,
								index * width,
								(index + 1) * width
							],
							outputRange: [0.3, 1, 0.3],
							extrapolate: 'clamp'
						})

						const dotWidth = scrollX.interpolate({
							inputRange: [
								(index - 1) * width,
								index * width,
								(index + 1) * width
							],
							outputRange: [10, 20, 10],
							extrapolate: 'clamp'
						})

						return (
							<Animated.View
								key={index}
								style={[
									styles.dot,
									{ opacity, width: dotWidth }
								]}
							/>
						)
					})}
				</View>
			</View>
		</Section>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	slide: {
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	pagination: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 5,
		alignSelf: 'center'
	},
	dot: {
		height: 10,
		width: 10,
		borderRadius: 5,
		marginHorizontal: 5,
		backgroundColor: '#2f2f2f'
	}
})

export default Carouse
