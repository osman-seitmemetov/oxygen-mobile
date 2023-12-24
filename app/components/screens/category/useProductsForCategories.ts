import { useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { IProductsFilterFields } from '@/components/screens/category/category.interface'
import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '@/services/category.service'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { ProductService } from '@/services/product.service'

export const useProductsForCategories = () => {
	const { params } = useTypedRoute<'Category'>()

	const [productsFilterFormValues, setProductsFilterFormValues] =
		useState<IProductsFilterFields>()
	const debouncedProductsFilterFormValues = useDebounce(
		productsFilterFormValues,
		400
	)
	// const {query} = useRouter();
	const categoryId = String(params.id)

	const { data: category, isLoading: isCategoryLoading } = useQuery(
		['category', categoryId],
		() => CategoryService.getById(categoryId),
		{
			// onError: (error: any) => {
			//     // toastError(error, 'Возникла ошибка при получении категорий')
			// },
			enabled: !!params.id
		}
	)

	const { data: children, isLoading: isChildrenLoading } = useQuery(
		['children of category', categoryId],
		() => CategoryService.getChildrenById(categoryId),
		{
			// onError: (error: any) => {
			// 	toastError(error, 'Возникла ошибка при получении категорий')
			// },
			enabled: !!params.id
		}
	)

	const { data: products, isLoading: isProductsLoading } = useQuery(
		[
			'products of categories',
			categoryId,
			debouncedProductsFilterFormValues
		],
		() =>
			ProductService.getAll({
				categoryId: Number(categoryId),
				typeIds: debouncedProductsFilterFormValues?.typeIds,
				brandIds: debouncedProductsFilterFormValues?.brandIds,
				sort: debouncedProductsFilterFormValues?.sort,
				priceMin: debouncedProductsFilterFormValues?.priceMin,
				priceMax: debouncedProductsFilterFormValues?.priceMax,
				parameters: debouncedProductsFilterFormValues?.parameters
			}),
		{
			// onError: (error: any) => {
			// 	toastError(error, 'Возникла ошибка при получении категорий')
			// },
			enabled: !!params.id
		}
	)

	return useMemo(
		() => ({
			category,
			isCategoryLoading,
			products,
			isProductsLoading,
			children,
			isChildrenLoading,
			setProductsFilterFormValues
		}),
		[
			category,
			children,
			isCategoryLoading,
			isChildrenLoading,
			isProductsLoading,
			products,
			setProductsFilterFormValues
		]
	)
}
