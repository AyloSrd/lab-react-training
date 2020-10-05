import React from 'react'

const CreditCard = props => {
	const {  
		type, 
		number,
		expirationMonth,
		expirationYear,
		bank,
		owner,
		bgColor,
		color
	} = props

	const imgSrc = type === 'Visa' ? '/img/credit/visa.png' : '/img/credit/mastercard.png'

	return (
		<div className="CreditCard" style={{ backgroundColor:bgColor, color:color}} >
			<img src={imgSrc} alt="card type"/>
			<h1>●●●● ●●●● ●●●● {number.slice(-4)}</h1>
			<div className="expDateAndBank">
				<p>Expires {('0' + expirationMonth).slice(-2)}/{(`${expirationYear}`).slice(-2)}</p>
				<p>{bank}</p>
			</div>
			<p>{owner}</p>
		</div>
	)
}

export default CreditCard
