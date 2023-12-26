import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Banner = styled.View`
	border-radius: 10px;
	margin: 0 5px;
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
	height: 70,
	borderRadius: 10,
	backgroundColor: getColor('mineShaft')
}

export default { Banner, USP, Title, Text, Image }

export const styles = { image }
