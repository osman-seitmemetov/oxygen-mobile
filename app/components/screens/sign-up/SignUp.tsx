import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
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

const SignUp: FC = () => {
	const { handleSubmit, control, reset } = useForm<SignUpFormData>({
		mode: 'onSubmit'
	})

	const { navigate } = useTypedNavigation()

	const { isLoading, signUpSync } = useSignUp(reset)

	const onSubmit: SubmitHandler<SignUpFormData> = data => {
		signUpSync(data)
		console.log(data)
	}

	return (
		<Layout>
			<Heading title='Регистрация' />

			<DismissKeyboard>
				<ScrollView
					style={{ paddingHorizontal: 10, marginBottom: 10 }}
					showsVerticalScrollIndicator={false}
				>
					<View>{isLoading ? <Loader /> : <></>}</View>

					<SignUpForm control={control} />

					<PrimaryButton onPress={handleSubmit(onSubmit)}>
						Зарегистрироваться
					</PrimaryButton>

					<FormSeparator />
					<SecondaryButton onPress={() => navigate('SignIn')}>
						Войти
					</SecondaryButton>
				</ScrollView>
			</DismissKeyboard>
		</Layout>
	)
}

export default SignUp
