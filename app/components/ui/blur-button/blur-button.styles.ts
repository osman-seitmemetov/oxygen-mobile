import { TypeFeatherIconNames } from '../../../shared/types/icon.types'
import { PressableProps } from 'react-native'

export interface BlurButtonProps extends PressableProps {
	icon?: TypeFeatherIconNames
	iconSize?: number
	color?: string
}
