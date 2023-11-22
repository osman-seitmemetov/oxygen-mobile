import React, { FC } from 'react'
import { View } from 'react-native'
import { Layout, Loader } from '@/components/ui'
import Heading from '@/components/ui/layout/heading/Heading'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import CartItem from './cart-item/CartItem'
import { useCart } from '@/hooks/useCart'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import CartInfo from '@/components/screens/cart/CartInfo/CartInfo'

const Cart: FC = () => {
	const { isCartLoading, cart } = useCart()
	const { height } = useSafeAreaFrame()

	return (
		<Layout>
			<View>
				<Heading title='Корзина' />

				<CustomScrollView
					style={{
						height: height - 55 - 100
					}}
				>
					{isCartLoading ? (
						<Loader />
					) : (
						cart && (
							<>
								{cart.items.map((item, index) => (
									<CartItem
										key={item.product.id}
										cartProduct={item}
										isLastEl={
											cart.items.length - 1 === index
										}
									/>
								))}

								<CartInfo count={cart.count} sum={cart.sum} />
							</>
						)
					)}
				</CustomScrollView>
			</View>
		</Layout>
	)
}

export default Cart
