import React, { FC, useContext } from 'react'
import Styled from './product-carousel.styles'
import { FlatList, ViewStyle } from 'react-native'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import { Loader } from '@/components/ui'
import ProductCard from '@/components/ui/product-card/ProductCard'
import { IProduct } from '@/shared/types/product.interface'

interface ProductSliderProps {
	style?: ViewStyle
	title: string
	products: IProduct[]
	isLoading: boolean
}

const ProductCarousel: FC<ProductSliderProps> = ({
	style,
	title,
	products,
	isLoading
}) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<Styled.Section
			style={{
				...style,
				backgroundColor: isDark ? 'rgb(28, 28, 30)' : '#fff'
			}}
		>
			<Styled.Title>{title}</Styled.Title>
			{isLoading ? (
				<Loader />
			) : (
				products?.length && (
					<FlatList
						data={products}
						snapToAlignment='start'
						keyExtractor={item => item.id.toString()}
						showsHorizontalScrollIndicator={false}
						horizontal
						renderToHardwareTextureAndroid
						scrollEventThrottle={16}
						renderItem={({ item: product }) => (
							<ProductCard product={product} />
						)}
					/>
				)
			)}
		</Styled.Section>
	)
}

export default ProductCarousel
