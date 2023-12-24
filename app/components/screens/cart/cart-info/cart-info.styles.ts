import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const CartInfoHead = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`

const Brief = styled.Text`
	font-size: 14px;
	color: ${getColor('silver')};
`

const Title = styled.Text`
	font-size: 20px;
`

const Info = styled.View`
	flex-direction: row;
	width: 100%;
	font-size: 18px;
	font-weight: 700;
`

export default { CartInfoHead, Title, Brief, Info }
