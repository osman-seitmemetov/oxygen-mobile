import { FC, PropsWithChildren } from 'react'
import { Pressable } from 'react-native'
import { BlurButtonProps } from './blur-button.interface'
import { BlurView } from 'expo-blur'
import { Feather } from '@expo/vector-icons'

const BlurButton: FC<PropsWithChildren<BlurButtonProps>> = ({
	children,
	color = '#fff',
	iconSize = 24,
	icon,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView intensity={22} tint='light'>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurButton
