import {
	TypeAntDesignNames,
	TypeFeatherIconNames,
	TypeFontistoNames,
	TypeIoniconsNames,
	TypeMaterialCommunityIconNames
} from '@/shared/types/icon.types'
import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface IMenuItem {
	iconPack:
		| 'Ionicons'
		| 'Feather'
		| 'AntDesign'
		| 'Fontisto'
		| 'MaterialCommunityIcons'
	iconName:
		| TypeFeatherIconNames
		| TypeIoniconsNames
		| TypeAntDesignNames
		| TypeFontistoNames
		| TypeMaterialCommunityIconNames
	path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
