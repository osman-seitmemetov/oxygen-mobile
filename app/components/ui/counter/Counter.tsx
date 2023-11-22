import { FC } from 'react'
import { Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Styled from './counter.styles'
import { getColor } from '@/styles/colors'
import { useCounter } from '@/components/ui/counter/useCounter'

interface CounterProps {
	min: number
	max: number
	changeCountHandler: () => any
	value: number
}

const Counter: FC<CounterProps> = ({ min, max, changeCountHandler, value }) => {
	const { onChangePlus, onChangeMinus, count } = useCounter(
		Number(value),
		min,
		max,
		changeCountHandler
	)

	return (
		<Styled.Counter>
			<Styled.MinusButton
				style={{
					backgroundColor:
						count === min
							? getColor('mineShaft')
							: 'rgba(61,145,255,0.2)'
				}}
				onPress={onChangeMinus}
			>
				<Entypo
					name='minus'
					color={count === min ? getColor('silver') : '#1266dc'}
					size={20}
				/>
			</Styled.MinusButton>

			<Styled.Count>
				<Text>{count}</Text>
			</Styled.Count>

			<Styled.PlusButton
				style={{
					backgroundColor:
						count === max
							? getColor('mineShaft')
							: 'rgba(61,145,255,0.2)'
				}}
				onPress={onChangePlus}
			>
				<Entypo
					name='plus'
					color={count === max ? getColor('silver') : '#1266dc'}
					size={20}
				/>
			</Styled.PlusButton>
		</Styled.Counter>
	)
}

export default Counter
