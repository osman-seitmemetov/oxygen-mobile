export interface ICatalogItem {
	parent: {
		id: number
		name: string
		img: string
	}
	children: {
		id: number
		name: string
		img: string
		order: number
	}[]
}
