import { IRoute } from './navigation.types'
import Home from '../components/screens/home/Home'
import SignIn from '../components/screens/sign-in/SignIn'
import { adminRoutes } from './admin.routes'
import Catalog from '../components/screens/catalog/Catalog'
import { userRoutes } from './user.routes'
import SignUp from '../components/screens/sign-up/SignUp'
import Category from '@/components/screens/category/Category'
import Favorites from '@/components/screens/favorites/Favorites'
import Cart from '@/components/screens/cart/Cart'
import Product from '@/components/screens/product/Product'

export const routesAllAccess: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Cart',
		component: Cart
	},
	{
		name: 'SignIn',
		component: SignIn
	},
	{
		name: 'SignUp',
		component: SignUp
	},
	{
		name: 'Catalog',
		component: Catalog
	},
	{
		name: 'Category',
		component: Category
	},
	{
		name: 'Product',
		component: Product
	}
]

export const routes = [...routesAllAccess, ...userRoutes, ...adminRoutes]
