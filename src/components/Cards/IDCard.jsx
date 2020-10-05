/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const IDCard = (props) => {
	const DATE_OPTIONS = { 
		weekday: 'short', 
		year: 'numeric', 
		month: 'short', 
		day: 'numeric' 
	}

	return (
		<div className="IDCard">
			<img src={props.picture} alt="profile picture"/>
	<p><span>First name : </span>{props.firstName}</p>
			<p><span>Last Name : </span>{props.lastName}</p>
			<p><span>Gender : </span>{props.gender}</p>
			<p><span>Height : </span>{props.height/100}m</p>
			<p><span>Birth : </span>{props.birth.toLocaleDateString('en-US', DATE_OPTIONS)}</p>
		</div>
	)
}

export default IDCard
