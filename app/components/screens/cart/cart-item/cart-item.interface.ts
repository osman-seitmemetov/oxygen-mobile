import { ICartProduct } from '@/shared/types/cart.interface'

export interface CartItemProps {
	cartProduct: ICartProduct
	isLastEl?: boolean
}
