import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Pressable = styled.Pressable`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	border-radius: 10px;
	border: 2px solid ${getColor('main')};
`

const Text = styled.Text`
	color: ${getColor('main')};
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
`

export default { Pressable, Text }
