import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '@/services/category.service'
import { useMemo } from 'react'

export const useCategories = () => {
	const { isLoading: isCategoriesLoading, data: categories } = useQuery(
		['get all categories'],
		() => CategoryService.getAll()
	)

	return useMemo(
		() => ({
			isCategoriesLoading,
			categories
		}),
		[isCategoriesLoading, categories]
	)
}
