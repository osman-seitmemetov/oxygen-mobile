import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { AuthService } from '@/services/auth/auth.service'
import { useAuth } from '@/hooks/useAuth'
import { Feather } from '@expo/vector-icons'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const logout = () => {
		AuthService.logout().then(() => setUser(null))
	}

	return (
		<View>
			<Pressable onPress={logout}>
				<Feather name='log-out' size={24} />
				<Text>Выйти</Text>
			</Pressable>
		</View>
	)
}

export default Profile
