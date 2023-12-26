import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { getFont } from '@/shared/fonts'
import { ICatalogItem } from '@/shared/types/catalog.types'
import { Section } from '@/components/ui'
import CategoryItem from '@/components/screens/catalog/category-item/CategoryItem'

interface CatalogProps {
	catalogItem: ICatalogItem
}

const CatalogItem: FC<CatalogProps> = ({ catalogItem }) => {
	return (
		<Section>
			<Text style={[getFont('Museo Sans Cyrl 900'), { fontSize: 24 }]}>
				{catalogItem.parent.name}
			</Text>

			<View
				style={{
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					flexDirection: 'row'
				}}
			>
				{catalogItem.children.map((category, index) => (
					<CategoryItem
						key={category.id}
						category={category}
						index={index}
						style={{ width: '32%' }}
					/>
				))}
			</View>
		</Section>
	)
}

export default CatalogItem
