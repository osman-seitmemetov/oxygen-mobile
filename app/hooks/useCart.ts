import { useAuth } from '@/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { CartService } from '@/services/cart.service'

export const useCart = () => {
	const { user } = useAuth()

	const { isLoading: isCartLoading, data: cart } = useQuery(
		['get cart'],
		() => CartService.get(),
		{
			enabled: !!user
		}
	)

	return { isCartLoading, cart }
}
