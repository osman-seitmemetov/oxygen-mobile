import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CartService } from '@/services/cart.service'

export const useToggleCart = (productId: number) => {
	const queryClient = useQueryClient()

	const { mutate: addToCart, isLoading: isAddToCartLoading } = useMutation(
		['add to cart'],
		() => CartService.addToCart({ productId }),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get cart'])
			}
		}
	)

	const { mutate: removeFromCart, isLoading: isRemoveFromCartLoading } =
		useMutation(
			['remove from cart'],
			() => CartService.deleteFromCart({ productId }),
			{
				async onSuccess() {
					await queryClient.invalidateQueries(['get cart'])
				}
			}
		)

	return {
		addToCart,
		isAddToCartLoading,
		removeFromCart,
		isRemoveFromCartLoading
	}
}
