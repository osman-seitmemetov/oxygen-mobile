import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CartService } from '@/services/cart.service'

export const useCartItem = (id: number, count: number, productId: number) => {
	const queryClient = useQueryClient()

	const { mutate: changeCount } = useMutation(['change count'], () =>
		CartService.changeCount(id, count)
	)

	const { mutate: removeFromCart } = useMutation(
		['add to favorites'],
		() => CartService.deleteFromCart({ productId }),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get cart'])
			}
		}
	)

	return { changeCount, removeFromCart }
}
