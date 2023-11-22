import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { CategoryService } from '@/services/category.service'

export const useCategory = () => {
	const { params } = useTypedRoute<'Category'>()

	const { isLoading: isCategoryLoading, data: category } = useQuery(
		['get genre by slug', params.id],
		() => CategoryService.getById(String(params.id))
	)

	return useMemo(
		() => ({
			isCategoryLoading,
			category
		}),
		[isCategoryLoading, category]
	)
}
