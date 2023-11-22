import { CSSProperties, ReactNode } from 'react'

export interface FieldGroupProps {
	label: string
	disabled?: boolean
	children?: ReactNode
	style?: CSSProperties
	autoMargin?: boolean
}
