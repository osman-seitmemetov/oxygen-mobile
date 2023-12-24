import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions
} from 'react-hook-form'
import { TextInputProps } from 'react-native'

export interface IField<T extends FieldValues>
	extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
	control: Control<T>
	name: FieldPath<T>
	clearErrors: (
		name?: FieldPath<T> | FieldPath<T>[] | `root.${string}` | 'root'
	) => void
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
}
