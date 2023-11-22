import React, { FC } from 'react'
import { ISecondaryButton } from './secondary-button.interface'
import Styled from './secondary-button.styles'

const SecondaryButton: FC<ISecondaryButton> = ({ children, ...rest }) => {
	return (
		<Styled.Pressable {...rest}>
			<Styled.Text>{children}</Styled.Text>
		</Styled.Pressable>
	)
}

export default SecondaryButton
