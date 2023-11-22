const colors = {
	main: '#1266dc',
	error: '#FF3D3D',
	wistful: '#A7AED2',
	mystic: '#e2e5ee',
	gallery: '#F0F0F0',
	silver: '#8f8f8f',
	crimson: '#DA1B3F',
	red: '#f34161',
	mineShaft: '#303030',
	alto: '#d6d5d5',
	green: '#5bcb73'
}

export const getColor = (color: keyof typeof colors) => colors[color]

export const LIGHT_COLORS = {
	layout: getColor('gallery'),
	textColor: 'rgb(28, 28, 30)',
	thumbColor: 'rgb(255, 255, 255)'
}

export const DARK_COLORS = {
	layout: '#000',
	textColor: 'rgb(242, 242, 247)',
	thumbColor: 'rgb(255, 255, 255)'
}
