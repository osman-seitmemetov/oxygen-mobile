import styled from 'styled-components/native'

const View = styled.View`
	position: fixed;
	top: 0;
	width: 100%;
	padding: 10px;
	//margin-bottom: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	flex-direction: row;
`

const Text = styled.Text`
	color: #000000;
	font-size: 22px;
	text-align: center;
`

export default { View, Text }
