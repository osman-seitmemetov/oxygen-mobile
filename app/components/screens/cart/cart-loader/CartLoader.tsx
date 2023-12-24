import React, { FC } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import SkeletonLoader from 'expo-skeleton-loader'

const CartLoader: FC = () => {
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
						height: 150,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width,
						height: 150,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width,
						height: 150,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width,
						height: 150,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	)
}

export default CartLoader
