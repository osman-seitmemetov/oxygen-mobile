import React, { FC } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import SkeletonLoader from 'expo-skeleton-loader'

const CatalogLoader: FC = () => {
	const { width } = useSafeAreaFrame()

	return (
		<SkeletonLoader>
			<SkeletonLoader.Item
				style={{
					width: width * 0.7,
					height: 30,
					marginBottom: 15,
					borderRadius: 10,
					marginHorizontal: 10
				}}
			/>

			<SkeletonLoader.Container
				style={{
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					flexDirection: 'row',
					paddingHorizontal: 10
				}}
			>
				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>
			</SkeletonLoader.Container>

			<SkeletonLoader.Item
				style={{
					width: width * 0.5,
					height: 30,
					marginBottom: 15,
					borderRadius: 10,
					marginHorizontal: 10
				}}
			/>

			<SkeletonLoader.Container
				style={{
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					flexDirection: 'row',
					paddingHorizontal: 10
				}}
			>
				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>

				<SkeletonLoader.Item
					style={{
						width: width * 0.3,
						height: 130,
						marginBottom: 15,
						borderRadius: 10
					}}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	)
}

export default CatalogLoader
