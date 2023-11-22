import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { ProductService } from '@/services/product.service'

export const useProduct = () => {
	const { params } = useTypedRoute<'Product'>()

	const { isLoading: isProductLoading, data: product } = useQuery(
		['get product by id', params.id],
		() => ProductService.getById(String(params.id))
	)

	return useMemo(
		() => ({
			isProductLoading,
			product
		}),
		[isProductLoading]
	)
}
