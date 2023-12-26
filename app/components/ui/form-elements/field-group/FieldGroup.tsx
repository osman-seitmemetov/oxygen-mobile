import React, { FC } from 'react'
import Styled from './field-group.styles'
import { FieldGroupProps } from './field-group.interface'
import { getFont } from '@/shared/fonts'

const FieldGroup: FC<FieldGroupProps> = ({ label, children }) => {
	return (
		<Styled.View>
			<Styled.Text style={getFont('Museo Sans Cyrl 700')}>
				{label}
			</Styled.Text>
			{children}
		</Styled.View>
	)
}

export default FieldGroup
