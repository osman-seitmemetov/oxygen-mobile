module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./app'],
					alias: {
						'@/assets': './app/assets',
						'@/components': './app/components',
						'@/config': './app/config',
						'@/hooks': './app/hooks',
						'@/navigation': './app/navigation',
						'@/providers': './app/providers',
						'@/services': './app/services',
						'@/shared': './app/shared',
						'@/styles': './app/styles'
					}
				}
			],
			['inline-dotenv'],
			'react-native-reanimated/plugin'
		]
	}
}
