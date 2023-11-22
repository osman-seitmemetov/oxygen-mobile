import React, { FC, useContext } from 'react'
import { Pressable, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '@/providers/theme/ThemeProvider'
import SearchGlobal from '@/components/ui/search-global/SearchGlobal'
import FavoriteButton from '@/components/ui/product-card/favorite-button/FavoriteButton'
import { ProductHeaderProps } from '@/components/screens/product/product-header/product-header.interface'

const ProductHeader: FC<ProductHeaderProps> = ({ productId }) => {
	const { goBack } = useTypedNavigation()
	const { top } = useSafeAreaInsets()
	const { isDark } = useContext(ThemeContext)

	return (
		<View
			style={{
				backgroundColor: isDark ? 'rgb(28, 28, 30)' : '#fff',
				width: '100%',
				padding: 10,
				paddingTop: top + 10,
				borderBottomLeftRadius: 10,
				borderBottomRightRadius: 10,
				height: 57 + top,
				zIndex: 100
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Pressable onPress={goBack}>
					<MaterialIcons name='chevron-left' size={32} />
				</Pressable>

				<SearchGlobal
					style={{
						width: '75%',
						marginBottom: 0
					}}
				/>

				{productId && (
					<FavoriteButton withoutBG productId={productId} />
				)}
			</View>
		</View>
	)
}

export default ProductHeader
