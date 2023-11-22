import { View } from 'react-native'
import { IField } from './field.interface'
import { Controller } from 'react-hook-form'
import Styled from './field.styles'
import { getColor } from '@/styles/colors'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	...rest
}: IField<T>): JSX.Element => {
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
						style={{ borderColor: error ? 'red' : 'transparent' }}
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
							{...rest}
						/>
					</View>
					{error && <Styled.Text>{error.message}</Styled.Text>}
				</>
			)}
		/>
	)
}

export default Field
