import React, { FC } from 'react'
import { SignUpFormData } from '@/shared/types/auth.interface'
import { Control } from 'react-hook-form'
import { validEmail } from '@/shared/validEmail'
import { genders } from '@/shared/genders'
import {
	DateField,
	Dropdown,
	Field,
	FieldGroup,
	PasswordField
} from '@/components/ui'

interface AuthFormProps {
	control: Control<SignUpFormData>
}

const SignUpForm: FC<AuthFormProps> = ({ control }) => {
	return (
		<>
			<FieldGroup label='Имя'>
				<Field<SignUpFormData>
					control={control}
					name='firstname'
					placeholder='Введите имя'
					rules={{
						required: 'Это поле обязательное'
					}}
				/>
			</FieldGroup>

			<FieldGroup label='Фамилия'>
				<Field<SignUpFormData>
					control={control}
					name='lastname'
					placeholder='Введите фамилию'
					rules={{
						required: 'Это поле обязательное'
					}}
				/>
			</FieldGroup>

			<FieldGroup label='Email'>
				<Field<SignUpFormData>
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

			<FieldGroup label='Пароль'>
				<PasswordField<SignUpFormData>
					control={control}
					name='password'
					placeholder='Введите пароль'
					rules={{
						required: 'Это поле обязательное',
						minLength: {
							value: 5,
							message: 'Минимальная длина пароля 5 символов'
						}
					}}
				/>
			</FieldGroup>

			<FieldGroup label='Пол'>
				<Dropdown<SignUpFormData>
					control={control}
					name='gender'
					placeholder='Выберите пол'
					options={genders}
				/>
			</FieldGroup>

			<FieldGroup label='Дата рождения'>
				<DateField<SignUpFormData>
					control={control}
					name='birthday'
					placeholder='Выберите дату рождения'
					maximumDate={new Date()}
				/>
			</FieldGroup>

			<FieldGroup label='Номер телефона'>
				<Field<SignUpFormData>
					control={control}
					name='phone'
					placeholder='Введите номер телефона'
				/>
			</FieldGroup>
		</>
	)
}

export default SignUpForm
