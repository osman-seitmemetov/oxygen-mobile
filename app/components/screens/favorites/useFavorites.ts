import { useAuth } from '@/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { FavoritesService } from '@/services/favorites.service'

export const useFavorites = () => {
	const { user } = useAuth()

	const { isLoading: isFavoritesLoading, data: favorites } = useQuery(
		['get favorites'],
		() => FavoritesService.get(),
		{
			enabled: !!user
		}
	)

	return { isFavoritesLoading, favorites }
}
