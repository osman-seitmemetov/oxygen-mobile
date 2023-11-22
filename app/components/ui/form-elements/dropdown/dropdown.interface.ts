import { ItemType } from 'react-native-dropdown-picker'
import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions
} from 'react-hook-form'
import { TextInputProps, ViewStyle } from 'react-native'

export interface DropdownProps<T extends FieldValues>
	extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
	control: Control<T>
	name: FieldPath<T>
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
	options: ItemType<any>[]
	isMulti?: boolean
	isLoading?: boolean
	style?: ViewStyle
	placeholder: string
}
