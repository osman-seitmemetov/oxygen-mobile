import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Error = styled.Text`
	margin-top: 5px;
	font-weight: 300;
	font-size: 16px;
	color: ${getColor('error')};
	display: flex;
`

const Input = styled.Pressable<{ isError?: boolean }>`
	width: 100%;
	height: 50px;
	border: 1px solid
		${p => (p.isError ? getColor('error') : getColor('wistful'))};
	border-radius: 10px;
	padding: 0 15px;
	font-weight: 300;
	font-size: 16px;
	color: #000000;
	margin-top: 10px;
	background-color: transparent;
	display: flex;
	justify-content: center;
`

const Placeholder = styled.Text`
	font-size: 16px;
	font-weight: 300;
	color: ${getColor('wistful')};
`

export default { Error, Input, Placeholder }
