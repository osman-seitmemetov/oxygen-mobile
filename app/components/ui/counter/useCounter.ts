import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

export const useCounter = (
	value: number,
	min: number,
	max: number,
	onChangeCount: (debouncedCount: any) => any
) => {
	const [count, setCount] = useState<number>(value)
	const debouncedCount = useDebounce(count, 300)

	useEffect(() => {
		onChangeCount({ count: debouncedCount })
	}, [debouncedCount, onChangeCount])

	const onChange = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			// if (
			//     /^[0-9]+$/.test(e.target.value)
			//     && Number(e.target.value) >= min
			//     && Number(e.target.value) <= max
			// ) {
			//     setCount(e.target.value);
			// }
			//
			// if (e.target.value === "") setCount("");
			// console.log(min, "   ", max)
		},
		[max, min]
	)

	const onChangeMinus = useCallback(async () => {
		if (count && Number(count) > min) setCount(Number(count) - 1)
	}, [count, min])

	const onChangePlus = useCallback(async () => {
		if (count && Number(count) < max) setCount(Number(count) + 1)
	}, [count, max])

	return useMemo(
		() => ({
			onChangePlus,
			onChangeMinus,
			onChange,
			count
		}),
		[onChangePlus, onChangeMinus, onChange, count]
	)
}
