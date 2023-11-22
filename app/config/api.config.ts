import { Platform } from 'react-native'

//@ts-ignore
export const SERVER_URL_ANDROID = process.env.SERVER_URL_ANDROID

//@ts-ignore
export const SERVER_URL_IOS = process.env.SERVER_URL_IOS

export const SERVER_URL =
	Platform.OS === 'ios' ? SERVER_URL_IOS : SERVER_URL_ANDROID

export const API_URL = `${SERVER_URL}/api`

export const getAuthURL = (string?: string) => `/user${string || ''}`
export const getUsersURL = (string?: string) => `/user${string || ''}`
export const getProductsURL = (string?: string) => `/product${string || ''}`
export const getCategoriesURL = (string?: string) => `/category${string || ''}`
export const getBannersURL = (string?: string) => `/banner${string || ''}`
export const getCartURL = (string?: string) => `/basket${string || ''}`
