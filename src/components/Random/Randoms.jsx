import React from 'react'
import Random from './Random'

const Randoms = () => {
	return (
		<div className="Cont">
			<Random min={1} max={6}/>
<			Random min={1} max={100}/>
		</div>
	)
}

export default Randoms
