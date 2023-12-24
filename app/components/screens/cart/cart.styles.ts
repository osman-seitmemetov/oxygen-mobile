import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Empty = styled.View`
	align-items: center;
`

const Button = styled.TouchableOpacity`
	background-color: ${getColor('dodgerBlue')};
	border-radius: 8px;
	padding: 8px;
	margin-top: 10px;
`

const ButtonText = styled.Text`
	font-size: 16px;
	color: ${getColor('azureRadiance')};
`

export default { Empty, Button, ButtonText }
