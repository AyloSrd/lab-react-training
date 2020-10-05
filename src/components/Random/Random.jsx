import React from 'react'
import useRandom from './useRandom'

const Random = (props) => {
	const { min, max } = props
	const num = useRandom(min, max)
	return (
		<div className="pBox">
			<p>Random value between {min} and {max} => {num}</p>
		</div>
	)
}

export default Random
