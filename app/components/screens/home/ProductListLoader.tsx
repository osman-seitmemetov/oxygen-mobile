import React, { FC } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import SkeletonLoader from 'expo-skeleton-loader'

const ProductListLoader: FC = () => {
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
						width: width * 0.465,
						height: 150,
						marginBottom: 8,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.465,
						height: 150,
						marginBottom: 8,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.465,
						height: 150,
						marginBottom: 8,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.465,
						height: 150,
						marginBottom: 8,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.465,
						height: 150,
						marginBottom: 8,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.465,
						height: 150,
						marginBottom: 8,
						borderRadius: 10
					}}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	)
}

export default ProductListLoader
