import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product.service'

export const useProducts = () => {
	const { isLoading, data } = useQuery(['get products'], () =>
		ProductService.getAll()
	)

	return { isLoading, products: data }
}
