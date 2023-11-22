import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { FavoritesService } from '@/services/favorites.service'

export const useFavorite = (productId: number) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favorites } = useFavorites()

	useEffect(() => {
		if (!favorites) return

		const isHasMovie = favorites.items.some(f => f.product.id === productId)

		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favorites, isSmashed, productId])

	const queryClient = useQueryClient()

	const { mutate: addToFavorites } = useMutation(
		['add to favorites'],
		() => FavoritesService.add({ productId }),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get favorites'])
			}
		}
	)

	const { mutate: removeFromFavorites } = useMutation(
		['remove from favorites'],
		() => FavoritesService.delete({ productId }),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get favorites'])
			}
		}
	)

	return {
		addToFavorites,
		removeFromFavorites,
		isSmashed
	}
}
