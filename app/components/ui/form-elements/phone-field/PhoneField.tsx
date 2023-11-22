import React from 'react'
import { PhoneFieldProps } from './phone-field.interface'
import Styled from './phone-field.styles'
import { Controller } from 'react-hook-form'

const PhoneField = <T extends Record<string, any>>({
	control,
	name,
	placeholder
}: PhoneFieldProps<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: 'Это поле обязательное'
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					{/*<View*/}
					{/*	style={{ borderColor: error ? 'red' : 'transparent' }}*/}
					{/*>*/}
					{/*	<Styled.TextInput*/}
					{/*		placeholderTextColor={getColor('wistful')}*/}
					{/*		autoCapitalize='none'*/}
					{/*		onChangeText={onChange}*/}
					{/*		onBlur={onBlur}*/}
					{/*		style={{*/}
					{/*			borderColor: error*/}
					{/*				? getColor('error')*/}
					{/*				: getColor('wistful')*/}
					{/*		}}*/}
					{/*		value={(value || '').toString()}*/}
					{/*		{...rest}*/}
					{/*	/>*/}
					{/*</View>*/}
					{error && <Styled.Error>{error.message}</Styled.Error>}
				</>
			)}
		/>
	)
}

export default PhoneField
