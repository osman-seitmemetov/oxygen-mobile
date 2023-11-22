import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const View = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px 15px;
	width: 100%;
	position: relative;
	background-color: ${getColor('mystic')};
	border-radius: 10px;
	margin-bottom: 15px;
`

const TextInput = styled.TextInput`
	margin-left: 5px;
`

export default { View, TextInput }
