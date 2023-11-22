import React, { useState } from 'react'
import { DatePickerProps } from './date-picker.interface'
import DateTimePicker from '@react-native-community/datetimepicker'
import Styled from './date-picker.styles'
import { Controller } from 'react-hook-form'
import { getColor } from '@/styles/colors'
import { Text } from 'react-native'
import { convertInputDateToNormalDate } from '@/shared/date/convertInputDateToNormalDate'

const DatePicker = <T extends Record<string, any>>({
	control,
	name,
	maximumDate
}: DatePickerProps<T>): JSX.Element => {
	const [showPicker, setShowPicker] = useState<boolean>(false)

	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: 'Это поле обязательное'
			}}
			render={({ field, fieldState: { error } }) => (
				<>
					<Styled.Input
						onPress={() => setShowPicker(true)}
						style={{
							borderColor: error
								? getColor('error')
								: getColor('wistful')
						}}
					>
						{field.value ? (
							<Text>
								{convertInputDateToNormalDate(field.value)}
							</Text>
						) : (
							<Styled.Placeholder>
								Выберите дату...
							</Styled.Placeholder>
						)}
					</Styled.Input>
					{showPicker && (
						<DateTimePicker
							mode='date'
							display='spinner'
							value={field.value || new Date()}
							onChange={(e, date) => {
								setShowPicker(!showPicker)
								field.onChange(date)
							}}
							maximumDate={maximumDate}
						/>
					)}
					{error && <Styled.Error>{error.message}</Styled.Error>}
				</>
			)}
		/>
	)
}

export default DatePicker
