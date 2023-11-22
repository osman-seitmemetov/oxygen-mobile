import React, { useState } from 'react'
import { DropdownProps } from './dropdown.interface'
import DropDownPicker from 'react-native-dropdown-picker'
import { getColor } from '@/styles/colors'
import Styled from './dropdown.styles'
import { Controller } from 'react-hook-form'

DropDownPicker.setListMode('SCROLLVIEW')

const Dropdown = <T extends Record<string, any>>({
	isMulti,
	style,
	options,
	isLoading,
	placeholder,
	control,
	name,
	rules
}: DropdownProps<T>): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false)
	const [items, setItems] = useState(options)

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<>
					<DropDownPicker
						open={isOpen}
						setOpen={setIsOpen}
						items={items}
						setItems={setItems}
						value={field.value}
						setValue={(callback: any) => field.onChange(callback())}
						multiple={isMulti}
						loading={isLoading}
						mode='BADGE'
						activityIndicatorColor='#BF3335'
						style={{
							backgroundColor: 'transparent',
							borderColor: error ? 'red' : getColor('wistful'),
							paddingHorizontal: 16,
							marginVertical: 6
						}}
						textStyle={{
							fontSize: 16
						}}
						placeholderStyle={{
							color: getColor('wistful'),
							fontWeight: '300'
						}}
						dropDownContainerStyle={{
							backgroundColor: '#232323'
						}}
						placeholder={placeholder}
						showBadgeDot={false}
					/>
					{error && <Styled.Error>{error.message}</Styled.Error>}
				</>
			)}
		/>
	)
}

export default Dropdown
