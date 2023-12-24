import React, { FC } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import SkeletonLoader from 'expo-skeleton-loader'

const ProductLoader: FC = () => {
	const { width } = useSafeAreaFrame()

	return (
		<SkeletonLoader>
			<SkeletonLoader.Container
				style={{
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					flexDirection: 'row'
				}}
			>
				<SkeletonLoader.Item
					style={{
						width: width,
						height: 300,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.7,
						height: 30,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.5,
						height: 30,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.6,
						height: 30,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width,
						height: 50,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width,
						height: 300,
						borderRadius: 10
					}}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	)
}

export default ProductLoader
