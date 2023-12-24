import { FC } from 'react'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { Control, FieldPath, TriggerConfig } from 'react-hook-form'
import { validEmail } from '@/shared/validEmail'
import { Field, FieldGroup, PasswordField } from '@/components/ui'

interface AuthFormProps {
	control: Control<IAuthFormData>
	clearErrors: (
		name?:
			| FieldPath<IAuthFormData>
			| FieldPath<IAuthFormData>[]
			| `root.${string}`
			| 'root'
	) => void
	trigger: (
		name?: FieldPath<IAuthFormData> | FieldPath<IAuthFormData>[],
		options?: TriggerConfig
	) => Promise<boolean>
}

const SignInForm: FC<AuthFormProps> = ({ control, clearErrors, trigger }) => {
	return (
		<>
			<FieldGroup label='Email'>
				<Field<IAuthFormData>
					control={control}
					name='email'
					placeholder='Введите email'
					clearErrors={clearErrors}
					trigger={trigger}
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
					clearErrors={clearErrors}
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
