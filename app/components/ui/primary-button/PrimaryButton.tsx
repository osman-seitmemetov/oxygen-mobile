import { FC } from 'react'
import Styled from './primary-button.styles'
import { IPrimaryButton } from './primary-button.interface'
import { Loader } from '@/components/ui'

const PrimaryButton: FC<IPrimaryButton> = ({
	children,
	isLoading,
	...rest
}) => {
	return (
		<Styled.Pressable {...rest}>
			<Styled.Text>{isLoading ? <Loader /> : children}</Styled.Text>
		</Styled.Pressable>
	)
}

export default PrimaryButton
