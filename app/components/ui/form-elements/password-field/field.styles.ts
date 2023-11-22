import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const TextInput = styled.TextInput<{ isError?: boolean }>`
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
`

const Eye = styled.Pressable<{ isError?: boolean }>`
	position: absolute;
	right: 15px;
	bottom: 12px;
`

const Text = styled.Text`
	margin-top: 5px;
	font-weight: 300;
	font-size: 16px;
	color: ${getColor('error')};
	display: flex;
`

export default { TextInput, Text, Eye }
