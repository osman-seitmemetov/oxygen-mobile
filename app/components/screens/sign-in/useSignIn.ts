import { UseFormReset } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'
import { useMemo } from 'react'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const useSignIn = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()
	const { navigate } = useTypedNavigation()

	const { mutate: signInSync, isLoading } = useMutation(
		['signIn'],
		(data: IAuthFormData) => AuthService.signIn(data),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
				navigate('Profile')
			}
		}
	)

	return useMemo(() => ({ signInSync, isLoading }), [isLoading])
}
