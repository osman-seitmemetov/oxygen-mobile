import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const LogOut = styled.Pressable`
	flex-direction: row;
	align-items: center;
`

const LogOutText = styled.Text`
	flex-direction: row;
	align-items: center;
	color: ${getColor('error')};
	font-weight: 700;
	font-size: 16px;
	margin-left: 10px;
`

export default { LogOut, LogOutText }
