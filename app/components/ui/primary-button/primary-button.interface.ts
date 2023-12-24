import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

export interface IPrimaryButton extends TouchableOpacityProps {
	children?: ReactNode
	isLoading?: boolean
}
