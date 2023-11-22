import React, { FC } from 'react'
import Styled from './field-group.styles'
import { FieldGroupProps } from './field-group.interface'

const FieldGroup: FC<FieldGroupProps> = ({
	label,
	disabled,
	children,
	style
}) => {
	return (
		<Styled.View>
			<Styled.Text>{label}</Styled.Text>
			{children}
		</Styled.View>
	)
}

export default FieldGroup
