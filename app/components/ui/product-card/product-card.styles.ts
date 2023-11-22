import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Card = styled.Pressable`
	height: 250px;
	flex-direction: column;
	justify-content: space-between;
`

const Top = styled.View`
	position: relative;
`

const Img = styled.Image`
	width: 100%;
	object-fit: contain;
	border-radius: 10px;
	height: 115px;
`

const Title = styled.Text`
	font-weight: 700;
	color: ${getColor('mineShaft')};
	font-size: 15px;
	margin-bottom: 5px;
`

const Available = styled.Text`
	color: ${getColor('main')};
	margin-bottom: 5px;
	font-size: 10px;
`

const Weight = styled.Text`
	margin-bottom: 5px;
	font-size: 10px;
`

const Bottom = styled.View`
	justify-content: space-between;
	align-items: flex-end;
`

const Price = styled.View`
	display: flex;
	flex-direction: column;
	padding-bottom: 5px;
	font-weight: 700;
	margin-bottom: 0;
	font-size: 14px;
`

const PriceOld = styled.Text`
	font-weight: 400;
	text-decoration-line: line-through;
	color: ${getColor('alto')};
	font-size: 10px;
`

const PriceNew = styled.Text`
	color: ${getColor('error')};
	font-weight: 700;
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
	PriceOld,
	PriceNew
}
