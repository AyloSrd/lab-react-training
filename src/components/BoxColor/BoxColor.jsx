import React from 'react'

const BoxColor = props => {
	const { r, g, b} = props
	const brightness = Math.round(((parseInt(r) * 299) +
                      (parseInt(g) * 587) +
                      (parseInt(b) * 114)) / 1000)
  	const textColour = (brightness > 125) ? 'black' : 'white'
	const colorStyle = {
		'background-color':`rgb(${r}, ${g}, ${b})`,
		color: textColour,
		'margin-bottom': '20px',
		height: '70px',
		display: 'flex',
		'justify-content':'center',
		'align-items': 'center',
	}
	return (
		<div className="pBox" style={colorStyle}>
			<p>rgb({r}, {g}, {b})</p>
			<p>#{r.toString(16)}{g.toString(16)}{b.toString(16)}</p>
		</div>
	)
}

export default BoxColor
