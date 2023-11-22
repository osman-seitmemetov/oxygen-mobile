import React, { FC } from 'react'
import { PrimaryButton } from '@/components/ui'
import { useCart } from '@/hooks/useCart'
import { useToggleCart } from '@/components/screens/product/useToggleCart'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { ProductCartButtonProps } from '@/components/screens/product/product-cart-button/product-cart-button.interface'

const ProductCartButton: FC<ProductCartButtonProps> = ({ productId }) => {
	const { cart } = useCart()
	const { params } = useTypedRoute<'Product'>()
	const {
		addToCart,
		removeFromCart,
		isRemoveFromCartLoading,
		isAddToCartLoading
	} = useToggleCart(params.id)

	return (
		<>
			{cart?.items.find(cartItem => cartItem.product.id === productId) ? (
				<PrimaryButton
					isLoading={isRemoveFromCartLoading}
					onPress={() => removeFromCart()}
				>
					Убрать из корзины
				</PrimaryButton>
			) : (
				<PrimaryButton
					isLoading={isAddToCartLoading}
					onPress={() => addToCart()}
				>
					Добавить в корзину
				</PrimaryButton>
			)}
		</>
	)
}

export default ProductCartButton
