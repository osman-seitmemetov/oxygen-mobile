import { useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { SearchService } from '@/services/search.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(['search', debouncedSearch], () =>
		SearchService.getResult({ term: debouncedSearch })
	)

	const handleSearch = (term: string) => {
		setSearchTerm(term)
		console.log(term)
	}

	return useMemo(
		() => ({
			...queryData,
			handleSearch,
			searchTerm
		}),
		[queryData, searchTerm]
	)
}
