import { FC } from 'react'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { Control } from 'react-hook-form'
import { validEmail } from '@/shared/validEmail'
import { Field, FieldGroup, PasswordField } from '@/components/ui'

interface AuthFormProps {
	control: Control<IAuthFormData>
}

const SignInForm: FC<AuthFormProps> = ({ control }) => {
	return (
		<>
			<FieldGroup label='Email'>
				<Field<IAuthFormData>
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
					textContentType='emailAddress'
				/>
			</FieldGroup>

			<FieldGroup label='Пароль'>
				<PasswordField<IAuthFormData>
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
					textContentType='password'
				/>
			</FieldGroup>
		</>
	)
}

export default SignInForm
