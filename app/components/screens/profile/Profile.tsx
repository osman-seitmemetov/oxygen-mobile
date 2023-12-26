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
import { getColor } from '@/styles/colors'
import Styled, { styles } from './profile.styles'
import { useProfile } from './useProfile'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'
import { Image } from 'expo-image'
import { getFont } from '@/shared/fonts'

const Profile: FC = () => {
	const { setUser, user } = useAuth()

	const { handleSubmit, control, setValue } = useForm<ProfileFormData>({
		mode: 'onChange'
	})

	const { onSubmit } = useProfile(setValue)

	const logout = () => {
		AuthService.logout().then(() => setUser(null))
	}

	return (
		<Layout>
			<Heading title='Профиль' />

			<CustomScrollView>
				<Section>
					<Styled.Person>
						<Styled.ImageWrapper>
							<Image
								style={[styles.img]}
								source={require('../../../assets/avatar.png')}
								alt={'Avatar'}
								contentFit='contain'
								transition={1000}
							/>
						</Styled.ImageWrapper>

						<Styled.Name>
							<Styled.Firstname
								style={getFont('Museo Sans Cyrl 900')}
							>
								{user?.firstname}
							</Styled.Firstname>

							<Styled.Lastname
								style={getFont('Museo Sans Cyrl 900')}
							>
								{user?.lastname}
							</Styled.Lastname>
						</Styled.Name>
					</Styled.Person>
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

				{/*<Section title='Приложение'>*/}
				{/*	<SectionLink title='Тема приложения' page='ProfileTheme' />*/}
				{/*</Section>*/}

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
