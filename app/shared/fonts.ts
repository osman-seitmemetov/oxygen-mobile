const fonts = {
	'Museo Sans Cyrl 300': { fontFamily: 'Museo Sans Cyrl 300' },
	'Museo Sans Cyrl 500': { fontFamily: 'Museo Sans Cyrl 500' },
	'Museo Sans Cyrl 700': { fontFamily: 'Museo Sans Cyrl 700' },
	'Museo Sans Cyrl 900': { fontFamily: 'Museo Sans Cyrl 900' }
}

export const getFont = (font: keyof typeof fonts) => fonts[font]
