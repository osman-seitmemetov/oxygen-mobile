import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Card = styled.Pressable`
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 8px;
	background-color: #2f2f2f;
	border-radius: 10px;
`

const Top = styled.View`
	position: relative;
`

const Content = styled.View`
	padding: 5px;
`

const Img = styled.Image`
	width: 100%;
	object-fit: contain;
	border-radius: 10px;
	height: 115px;
`

const Title = styled.Text`
	color: ${getColor('mineShaft')};
	font-size: 16px;
	margin-bottom: 5px;
	margin-top: 5px;
`

const Available = styled.Text`
	color: ${getColor('main')};
	margin-bottom: 5px;
	font-size: 12px;
`

const Weight = styled.Text`
	margin-bottom: 5px;
	font-size: 12px;
`

const Bottom = styled.View`
	justify-content: space-between;
	align-items: flex-end;
`

const PriceRow = styled.View`
	flex-direction: row;
	align-items: center;
	//margin-top: 5px;
`

const Price = styled.View`
	border-radius: 6px;
	background-color: rgba(66, 231, 103, 0.3);
	padding: 5px;
`

const PriceText = styled.Text`
	font-size: 16px;
	color: ${getColor('green')};
`

const PriceDiscount = styled.View`
	border-radius: 6px;
	background-color: rgba(243, 65, 97, 0.3);
	padding: 3px;
	margin-left: 5px;
`

const PriceTextDiscount = styled.Text`
	font-size: 12px;
	color: ${getColor('red')};
	text-decoration: line-through;
`

export default {
	Card,
	Top,
	Img,
	Title,
	Available,
	Weight,
	Bottom,
	Price,
	PriceDiscount,
	PriceTextDiscount,
	PriceRow,
	PriceText,
	Content
}
