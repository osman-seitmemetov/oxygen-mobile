import { View } from 'react-native'
import { IField } from './field.interface'
import { Controller } from 'react-hook-form'
import Styled from './field.styles'
import { getColor } from '@/styles/colors'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const PasswordField = <T extends Record<string, any>>({
	control,
	rules,
	name,
	...rest
}: IField<T>): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						style={{
							borderColor: error ? 'red' : 'transparent',
							position: 'relative'
						}}
					>
						<Styled.TextInput
							placeholderTextColor={getColor('wistful')}
							autoCapitalize='none'
							onChangeText={onChange}
							onBlur={onBlur}
							style={{
								borderColor: error
									? getColor('error')
									: getColor('wistful')
							}}
							value={(value || '').toString()}
							secureTextEntry={!isVisible}
							{...rest}
						/>
						<Styled.Eye onPress={() => setIsVisible(!isVisible)}>
							{isVisible ? (
								<Ionicons name='eye-off-outline' size={24} />
							) : (
								<Ionicons name='eye-outline' size={24} />
							)}
						</Styled.Eye>
					</View>
					{error && <Styled.Text>{error.message}</Styled.Text>}
				</>
			)}
		/>
	)
}

export default PasswordField
