import { FC } from 'react'
import Styled from './form-separator.styles'

interface IFormSeparator {}

const FormSeparator: FC<IFormSeparator> = () => {
	return <Styled.Text>или</Styled.Text>
}

export default FormSeparator
