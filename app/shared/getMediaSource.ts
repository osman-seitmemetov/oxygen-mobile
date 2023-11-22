import { SERVER_URL } from '@/config/api.config'
import { ImageSourcePropType } from 'react-native'

export const getMediaSource = (URL: string): ImageSourcePropType => ({
	uri: SERVER_URL + '/' + URL
})
