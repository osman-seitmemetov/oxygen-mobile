import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const ProductHead = styled.View`
	margin-bottom: 10px;
	border-radius: 10px;
`

const Img = styled.Image`
	width: 100%;
	height: 300px;
	object-fit: cover;
	border-radius: 10px;
	margin-bottom: 10px;
`

const Title = styled.Text`
	font-size: 26px;
	margin-bottom: 10px;
	padding: 0 10px;
`

const PriceRow = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 0 10px;
	margin-bottom: 10px;
`

const Price = styled.View`
	border-radius: 8px;
	background-color: rgba(66, 231, 103, 0.3);
	padding: 5px;
`

const PriceText = styled.Text`
	font-size: 22px;
	color: ${getColor('green')};
	font-weight: 700;
`

const PriceDiscount = styled.View`
	border-radius: 8px;
	background-color: rgba(243, 65, 97, 0.3);
	padding: 3px;
	margin-left: 10px;
`

const PriceTextDiscount = styled.Text`
	font-size: 16px;
	color: ${getColor('red')};
	font-weight: 400;
	text-decoration: line-through;
`

const Count = styled.Text`
	font-size: 14px;
	font-weight: 400;
	margin-left: 10px;
	margin-bottom: 10px;
`

export default {
	Img,
	Title,
	PriceRow,
	PriceText,
	PriceTextDiscount,
	ProductHead,
	Count,
	Price,
	PriceDiscount
}
