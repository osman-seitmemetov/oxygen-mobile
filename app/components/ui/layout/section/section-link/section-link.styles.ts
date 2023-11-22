import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const SectionLink = styled.Pressable`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-color: ${getColor('silver')};
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-top-color: ${getColor('silver')};
	border-top-style: solid;
	border-top-width: 1px;
	padding: 10px;
	margin-bottom: 10px;
`

const Text = styled.Text`
	font-size: 16px;
`

export default { SectionLink, Text }
