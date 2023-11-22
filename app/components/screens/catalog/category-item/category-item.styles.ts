import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Item = styled.Pressable`
	//width: 50%;
	align-items: center;
	margin-bottom: 15px;
`

const Title = styled.Text`
	margin-top: 5px;
	font-size: 16px;
	font-weight: 700;
	text-align: center;
`

const Img = styled.Image`
	border-radius: 10px;
	object-fit: contain;
	width: 100%;
`

const NoImg = styled.View`
	width: 100%;
	height: 130px;
	border-radius: 10px;
	background-color: ${getColor('gallery')};
`

export default { Item, Title, Img, NoImg }
