import React, { FC } from 'react'
import { View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import SignInForm from './SignInForm'
import { useSignIn } from './useSignIn'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import {
	DismissKeyboard,
	FormSeparator,
	Heading,
	Layout,
	Loader,
	PrimaryButton,
	SecondaryButton
} from '@/components/ui'

const SignIn: FC = () => {
	const { handleSubmit, control, reset, clearErrors, trigger } =
		useForm<IAuthFormData>({
			mode: 'onSubmit'
		})

	const { isLoading, signInSync } = useSignIn(reset)

	const { navigate } = useTypedNavigation()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)
		signInSync(data)
	}

	return (
		<Layout>
			<Heading title='Вход' />

			<DismissKeyboard>
				<View style={{ paddingHorizontal: 10 }}>
					<View>{isLoading ? <Loader /> : <></>}</View>

					<SignInForm
						trigger={trigger}
						clearErrors={clearErrors}
						control={control}
					/>

					<PrimaryButton onPress={handleSubmit(onSubmit)}>
						Войти
					</PrimaryButton>

					<FormSeparator />
					<SecondaryButton onPress={() => navigate('SignUp')}>
						Зарегистрироваться
					</SecondaryButton>
				</View>
			</DismissKeyboard>
		</Layout>
	)
}

export default SignIn
