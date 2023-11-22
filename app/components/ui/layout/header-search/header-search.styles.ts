import styled from 'styled-components/native'
import { getColor } from '@/styles/colors'

const View = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 20;
	padding: 15px;
	height: 55px;
	border-top-color: ${getColor('wistful')};
	border-top-width: 0.5px;
	border-top-style: solid;
`

const MenuItem = styled.Pressable`
	//align-items: center;
	//display: flex;
`

export default { View, MenuItem }
