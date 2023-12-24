import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Button = styled.TouchableOpacity`
	justify-content: center;
	background-color: ${getColor('main')};
	border-radius: 10px;
	transition: 5s;
	border: 0;
	padding: 0 40px;
	height: 50px;
`

const Text = styled.Text`
	font-size: 18px;
	color: #ffffff;
	text-align: center;
	text-decoration: none;
`

export default { Button, Text }
