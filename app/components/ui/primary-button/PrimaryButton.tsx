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
		<Styled.Button activeOpacity={0.7} {...rest}>
			<Styled.Text style={{ fontFamily: 'Museo Sans Cyrl 700' }}>
				{isLoading ? <Loader /> : children}
			</Styled.Text>
		</Styled.Button>
	)
}

export default PrimaryButton
