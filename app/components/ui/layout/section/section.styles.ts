import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const Section = styled.View`
	padding: 10px;
	border-radius: 10px;
	margin-bottom: 10px;
	width: 100%;
	bottom: 0;
`

const Title = styled.Text`
	color: ${getColor('silver')};
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 10px;
`

export default { Section, Title }
