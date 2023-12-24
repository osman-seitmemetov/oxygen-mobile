import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Info = styled.View`
	flex-direction: row;
`

const Data = styled.View`
	width: 100%;
`

const Title = styled.Text`
	font-size: 18px;
	color: ${getColor('mineShaft')};
`

const Count = styled.Text`
	font-size: 14px;
	color: ${getColor('mineShaft')};
	width: 100%;
	margin-top: 5px;
`

const PriceRow = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 5px;
`

const Price = styled.View`
	border-radius: 6px;
	background-color: rgba(66, 231, 103, 0.3);
	padding: 3px;
`

const PriceText = styled.Text`
	font-size: 18px;
	color: ${getColor('green')};
`

const PriceDiscount = styled.View`
	border-radius: 6px;
	background-color: rgba(243, 65, 97, 0.3);
	padding: 2px;
	margin-left: 7px;
`

const PriceTextDiscount = styled.Text`
	font-size: 14px;
	color: ${getColor('red')};
	font-weight: 400;
	text-decoration: line-through;
`

const Actions = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-top: 10px;
	margin-top: 10px;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: rgba(143, 143, 143, 0.2);
`

const ActionsLeft = styled.View`
	flex-direction: row;
`

const DeleteButton = styled.Pressable`
	background-color: ${getColor('mineShaft')};
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	margin-left: 7px;
	border-radius: 8px;
`

const Empty = styled.View`
	justify-content: center;
`

const image = {
	marginRight: 10,
	width: 100,
	height: 100,
	borderRadius: 10,
	backgroundColor: getColor('mineShaft')
}

export default {
	Data,
	Title,
	Count,
	PriceRow,
	Price,
	PriceText,
	PriceDiscount,
	PriceTextDiscount,
	Info,
	Actions,
	DeleteButton,
	ActionsLeft,
	Empty
}
export const styles = { image }
