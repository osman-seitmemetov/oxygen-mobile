import {
	Keyboard,
	TouchableWithoutFeedback,
	View,
	ViewProps
} from 'react-native'
import { FC, PropsWithChildren } from 'react'

const DismissKeyboard: FC<PropsWithChildren<ViewProps>> = ({
	children,
	...rest
}) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={{ flex: 1 }} {...rest}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	)
}

export default DismissKeyboard
