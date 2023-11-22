export interface ICategory {
	id: number
	slug?: string
	name: string
	description?: string
	icon: string
	parentId: string
	lvl: string
	img: string
}

export interface ICategoryFields {
	name: string
	description: string
	icon: string
	parentId: string
	lvl: string
	img: string
	filterGroupIds: number[]
}
