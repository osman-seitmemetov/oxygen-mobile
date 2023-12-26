import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '@/services/category.service'
import { useMemo } from 'react'

export const useCatalogItems = () => {
	const { isLoading: isCatalogItemsLoading, data: catalogItems } = useQuery(
		['get all catalog items'],
		() => CategoryService.getCatalog()
	)

	return useMemo(
		() => ({
			isCatalogItemsLoading,
			catalogItems
		}),
		[isCatalogItemsLoading, catalogItems]
	)
}
