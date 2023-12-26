import React, { FC } from 'react'
import { View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import SignUpForm from './SignUpForm'
import { useSignUp } from './useSignUp'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { SignUpFormData } from '@/shared/types/auth.interface'
import {
	DismissKeyboard,
	FormSeparator,
	Heading,
	Layout,
	Loader,
	PrimaryButton,
	SecondaryButton
} from '@/components/ui'
import CustomScrollView from '@/components/ui/layout/custom-scroll-view/CustomScrollView'

const SignUp: FC = () => {
	const { handleSubmit, control, reset, clearErrors } =
		useForm<SignUpFormData>({
			mode: 'onSubmit'
		})

	const { navigate } = useTypedNavigation()

	const { isLoading, signUpSync } = useSignUp(reset)

	const onSubmit: SubmitHandler<SignUpFormData> = data => {
		signUpSync(data)
	}

	return (
		<Layout>
			<Heading title='Регистрация' />

			<DismissKeyboard>
				<CustomScrollView
					style={{ paddingHorizontal: 10, marginBottom: 10 }}
				>
					<View>{isLoading ? <Loader /> : <></>}</View>

					<SignUpForm clearErrors={clearErrors} control={control} />

					<PrimaryButton onPress={handleSubmit(onSubmit)}>
						Зарегистрироваться
					</PrimaryButton>

					<FormSeparator />
					<SecondaryButton onPress={() => navigate('SignIn')}>
						Войти
					</SecondaryButton>
				</CustomScrollView>
			</DismissKeyboard>
		</Layout>
	)
}

export default SignUp
