import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Error = styled.Text`
	margin-top: 5px;
	font-weight: 300;
	font-size: 16px;
	color: ${getColor('error')};
	display: flex;
`

export default { Error }
