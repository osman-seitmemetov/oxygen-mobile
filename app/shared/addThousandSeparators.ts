export const addThousandSeparators = (num?: number) => {
	return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ''
}
