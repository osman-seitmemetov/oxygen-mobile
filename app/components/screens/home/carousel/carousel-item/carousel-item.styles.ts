import styled from 'styled-components/native'
import { ITEM_SIZE } from './carousel-item.constants'
import { getColor } from '@/styles/colors'

const Banner = styled.View`
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 10px rgba(115, 121, 140, 0.15);
	//height: 280px;
	width: ${ITEM_SIZE}px;
	margin-right: 10px;
`

const USP = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: calc(100% - 15px);
	max-width: 100%;
	height: 100%;
	max-height: 50%;
	padding: 15px;
`

const Title = styled.Text`
	font-weight: 900;
	width: 100%;
	color: #fff;
	font-size: 24px;
	line-height: 29px;
	margin-bottom: 10px;
`

const Text = styled.Text`
	color: rgba(255, 255, 255, 0.75);
	font-weight: 300;
	font-size: 14px;
	line-height: 17px;
	color: #fff;
`

const Image = styled.Image`
	width: 100%;
	height: 150px;
	object-fit: cover;
	max-height: 50%;
	padding: 15px;
`

const image = {
	marginRight: 10,
	width: '100%',
	height: 70,
	borderRadius: 10,
	backgroundColor: getColor('mineShaft')
}

export default { Banner, USP, Title, Text, Image }

export const styles = { image }
