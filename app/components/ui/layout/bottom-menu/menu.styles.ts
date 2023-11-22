import styled from 'styled-components/native'

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
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: rgba(143, 143, 143, 0.2);
`
// border-top-left-radius: 10px;
// border-top-right-radius: 10px;

const MenuItem = styled.Pressable`
	//align-items: center;
	//display: flex;
`

export default { View, MenuItem }
