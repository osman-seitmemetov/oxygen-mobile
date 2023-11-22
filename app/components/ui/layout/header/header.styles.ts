import styled from 'styled-components/native'

const Header = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 15px;
`

const View = styled.View`
	margin-bottom: 20px;

	&:last-child {
		margin-bottom: 0;
	}
`

export default { Header, View }
