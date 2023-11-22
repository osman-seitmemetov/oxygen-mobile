import RnToast, { BaseToast } from 'react-native-toast-message'
import React, { FC } from 'react'
import { getColor } from '@/styles/colors'

const options = (primaryColor: string) => ({
	style: { backgroundColor: '#080808', borderLeftColor: primaryColor },
	text1Style: { color: '#fff', fontSize: 16 },
	text2Style: { fontSize: 14 }
})

const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			config={{
				success: props => (
					<BaseToast {...props} {...options('#67E769')} />
				),
				info: props => <BaseToast {...props} {...options('#65d4ff')} />,
				error: props => (
					<BaseToast {...props} {...options(getColor('error'))} />
				)
			}}
		/>
	)
}

export default Toast
