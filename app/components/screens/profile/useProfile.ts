import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { ProfileFormData } from './profile-form/profile-form.interface'
import { useMutation } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'
import Toast from 'react-native-toast-message'
import { useAuth } from '@/hooks/useAuth'
import { convertPostgresDateWithoutTime } from '@/shared/date/convertPostgresDateWithoutTime'
import { useEffect, useMemo } from 'react'

export const useProfile = (setValue: UseFormSetValue<ProfileFormData>) => {
	const { user } = useAuth()

	useEffect(() => {
		const birthday =
			convertPostgresDateWithoutTime(String(user?.birthday)) || new Date()
		setValue('email', user?.email)
		setValue('gender', user?.gender)
		setValue('birthday', birthday)
		setValue('firstname', user?.firstname)
		setValue('lastname', user?.lastname)
		setValue('phone', user?.phone)
	}, [user])

	const { mutate: updateProfileSync, isLoading } = useMutation(
		['update profile'],
		(data: ProfileFormData) => UserService.editProfile(data),
		{
			onSuccess() {
				Toast.show({
					text1: 'Редактирование профиля',
					text2: 'Профиль успешно обновлен',
					type: 'success'
				})
			}
		}
	)

	const onSubmit: SubmitHandler<ProfileFormData> = data => {
		updateProfileSync(data)
	}

	return useMemo(() => ({ onSubmit, isLoading }), [isLoading])
}
