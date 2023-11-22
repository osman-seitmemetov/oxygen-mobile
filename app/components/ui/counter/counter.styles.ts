import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Counter = styled.View`
	flex-direction: row;
`

const MinusButton = styled.Pressable`
	background-color: ${getColor('mineShaft')};
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border-radius: 8px;
`

const PlusButton = styled.Pressable`
	background-color: ${getColor('mineShaft')};
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border-radius: 8px;
`

const Count = styled.View`
	background-color: ${getColor('mineShaft')};
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 34px;
	margin: 0 7px;
	border-radius: 8px;
`

export default { Counter, MinusButton, PlusButton, Count }
