import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Item = styled.Pressable`
	align-items: center;
	margin-top: 25px;
	background-color: #2f2f2f;
	border-radius: 10px;
	padding: 15px 0;
	flex: 1;
	justify-content: space-between;
`

const Title = styled.Text`
	font-size: 12px;
	text-align: center;
	padding: 0 5px;
	margin-top: -15px;
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

const img = {
	borderRadius: 10,
	height: 150
}

export const styles = { img }

export default { Item, Title, Img, NoImg }
