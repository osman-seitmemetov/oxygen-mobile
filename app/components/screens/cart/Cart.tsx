import React, { FC } from 'react'
import { View } from 'react-native'
import { Layout } from '@/components/ui'
import Heading from '@/components/ui/layout/heading/Heading'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import CartItem from './cart-item/CartItem'
import { useCart } from '@/hooks/useCart'
import CartInfo from '@/components/screens/cart/cart-info/CartInfo'
import CartLoader from './cart-loader/CartLoader'
import CartEmpty from '@/components/screens/cart/CartEmpty'

const Cart: FC = () => {
	const { isCartLoading, cart } = useCart()

	return (
		<Layout>
			<View>
				<Heading title='Корзина' />

				<CustomScrollView>
					{isCartLoading ? (
						<CartLoader />
					) : cart && cart.items.length > 0 ? (
						<>
							{cart.items.map((item, index) => (
								<CartItem
									key={item.product.id}
									cartProduct={item}
									isLastEl={cart.items.length - 1 === index}
								/>
							))}

							<CartInfo
								count={cart.items.length}
								sum={cart.sum}
							/>
						</>
					) : (
						<CartEmpty />
					)}
				</CustomScrollView>
			</View>
		</Layout>
	)
}

export default Cart
