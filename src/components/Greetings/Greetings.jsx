import React from 'react'

const Greetings = (props) => {
	const greeting = props.lang === "de" ? "Hallo" : "Bonjour"
	return (
		<div className="pBox">
			<p>{greeting} {props.children}</p>
		</div>
	)
}

export default Greetings
