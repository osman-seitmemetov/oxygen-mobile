import React, { FC } from 'react'
import { AuthService } from '@/services/auth/auth.service'
import { useAuth } from '@/hooks/useAuth'
import { Feather } from '@expo/vector-icons'
import { useForm } from 'react-hook-form'
import { ProfileFormData } from './profile-form/profile-form.interface'
import Heading from '@/components/ui/layout/heading/Heading'
import {
	DateField,
	Dropdown,
	Field,
	FieldGroup,
	Layout,
	PrimaryButton,
	Section
} from '@/components/ui'
import { genders } from '@/shared/genders'
import { validEmail } from '@/shared/validEmail'
import SectionLink from '@/components/ui/layout/section/section-link/SectionLink'
import { getColor } from '@/styles/colors'
import Styled from './profile.styles'
import { useProfile } from './useProfile'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'

const Profile: FC = () => {
	const { setUser, user } = useAuth()

	const { handleSubmit, control, reset, setValue } = useForm<ProfileFormData>(
		{
			mode: 'onChange'
		}
	)

	const { isLoading, onSubmit } = useProfile(setValue)

	const logout = () => {
		AuthService.logout().then(() => setUser(null))
	}

	return (
		<Layout>
			<Heading title={`${user?.firstname} ${user?.lastname}`} />

			<CustomScrollView>
				<Section title='Личность'>
					<FieldGroup label='Имя'>
						<Field<ProfileFormData>
							control={control}
							name='firstname'
							placeholder='Введите имя'
							rules={{
								required: 'Это поле обязательное'
							}}
						/>
					</FieldGroup>

					<FieldGroup label='Фамилия'>
						<Field<ProfileFormData>
							control={control}
							name='lastname'
							placeholder='Введите фамилию'
							rules={{
								required: 'Это поле обязательное'
							}}
						/>
					</FieldGroup>
				</Section>

				<Section title='Учётные данные'>
					<FieldGroup label='Email'>
						<Field<ProfileFormData>
							control={control}
							name='email'
							placeholder='Введите email'
							rules={{
								pattern: {
									value: validEmail,
									message: 'Введите валидный email'
								},
								required: 'Это поле обязательное'
							}}
							keyboardType='email-address'
						/>
					</FieldGroup>

					<FieldGroup label='Пол'>
						<Dropdown<ProfileFormData>
							control={control}
							name='gender'
							placeholder='Выберите пол'
							options={genders}
						/>
					</FieldGroup>

					<FieldGroup label='Дата рождения'>
						<DateField<ProfileFormData>
							control={control}
							name='birthday'
							placeholder='Выберите дату рождения'
							maximumDate={new Date()}
						/>
					</FieldGroup>

					<FieldGroup label='Номер телефона'>
						<Field<ProfileFormData>
							control={control}
							name='phone'
							placeholder='Введите номер телефона'
						/>
					</FieldGroup>

					<PrimaryButton onPress={handleSubmit(onSubmit)}>
						Обновить данные
					</PrimaryButton>
				</Section>

				<Section title='Приложение'>
					<SectionLink title='Тема приложения' page='ProfileTheme' />
				</Section>

				<Section title='Аккаунт'>
					<Styled.LogOut onPress={logout}>
						<Feather
							name='log-out'
							size={24}
							color={getColor('error')}
						/>

						<Styled.LogOutText>Выйти из аккаунта</Styled.LogOutText>
					</Styled.LogOut>
				</Section>
			</CustomScrollView>
		</Layout>
	)
}

export default Profile
