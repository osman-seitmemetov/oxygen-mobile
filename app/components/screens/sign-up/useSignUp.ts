import { UseFormReset } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'
import { useMemo } from 'react'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { SignUpFormData } from '@/shared/types/auth.interface'

export const useSignUp = (reset: UseFormReset<SignUpFormData>) => {
	const { setUser } = useAuth()
	const { navigate } = useTypedNavigation()

	const { mutate: signUpSync, isLoading } = useMutation(
		['signUp'],
		(data: SignUpFormData) => AuthService.signUp(data),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
				navigate('Profile')
			}
		}
	)

	return useMemo(() => ({ signUpSync, isLoading }), [isLoading])
}
