import React from 'react'
import Greetings from './Greetings'

const GreetingsCont = () => {
	return (
		<div className="GrretingsCont Cont">
			<Greetings lang="de">Ludwig</Greetings>
			<Greetings lang="fr">François</Greetings>
		</div>
	)
}

export default GreetingsCont
