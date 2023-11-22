import { IRoute } from './navigation.types'
import Profile from '../components/screens/profile/Profile'
import ProfileTheme from '@/components/screens/profile-theme/ProfileTheme'

export const userRoutes: IRoute[] = [
	{
		name: 'Profile',
		component: Profile,
		isOnlyUser: true
	},
	{
		name: 'ProfileTheme',
		component: ProfileTheme,
		isOnlyUser: true
	}
]
