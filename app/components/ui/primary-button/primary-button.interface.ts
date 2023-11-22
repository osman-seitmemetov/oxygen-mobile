import { ReactNode } from 'react'
import { PressableProps } from 'react-native'

export interface IPrimaryButton extends PressableProps {
	children?: ReactNode
	isLoading?: boolean
}
