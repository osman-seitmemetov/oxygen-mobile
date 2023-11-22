import React, { FC } from 'react'
import { View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import SignInForm from './SignInForm'
import { useSignIn } from './useSignIn'
import { useAuth } from '@/hooks/useAuth'
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
	const { handleSubmit, control, reset } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { user } = useAuth()
	console.log('user', user)

	const { isLoading, signInSync } = useSignIn(reset)

	const { navigate } = useTypedNavigation()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		signInSync(data)
	}

	return (
		<Layout>
			<Heading title='Вход' />

			<DismissKeyboard>
				<View style={{ paddingHorizontal: 10 }}>
					<View>{isLoading ? <Loader /> : <></>}</View>

					<SignInForm control={control} />

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
