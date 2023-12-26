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

const ImageWrapper = styled.View`
	width: 90px;
	height: 90px;
	border-radius: 100px;
	background-color: ${getColor('mineShaft')};
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

const Person = styled.View`
	flex-direction: row;
	align-items: center;
`

const Name = styled.View`
	margin-left: 15px;
`

const Firstname = styled.Text`
	font-size: 22px;
`

const Lastname = styled.Text`
	font-size: 22px;
`

const img = {
	width: 70,
	height: 70,
	backgroundColor: getColor('mineShaft')
}

export const styles = { img }

export default {
	LogOut,
	LogOutText,
	ImageWrapper,
	Person,
	Name,
	Firstname,
	Lastname
}
