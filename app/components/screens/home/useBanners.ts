import { useQuery } from '@tanstack/react-query'
import { BannerService } from '@/services/banner.service'

export const useBanners = () => {
	const { isLoading, data } = useQuery(['get banners'], () =>
		BannerService.getAll()
	)

	return { isLoading, banners: data }
}
