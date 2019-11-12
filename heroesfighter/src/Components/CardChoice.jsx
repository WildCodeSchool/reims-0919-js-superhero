import React from 'react'
import Card from './Card'
import './CardChoice.css'
import { Link } from 'react-router-dom'

function CardChoice( { items, items2 , items3 , selectedCard, handleCardSelection, opacity } ) {
	return(
		<div className = 'CardChoiceBackground'>
			<h1 className = 'CardChoiceTitle'>CHOOSE YOUR HERO</h1>
			<div className = 'CardChoiceBox'> 
				<div className = {selectedCard === 'choose1' ? 'Choosed1' :'notChoosed1'} onClick = {() => handleCardSelection('choose1')} style = {opacity('choose1')} >
					<Card items={items} />
				</div>
				<div className = {selectedCard === 'choose2' ? 'Choosed2' :'notChoosed2'} onClick = {() => handleCardSelection('choose2')} style = {opacity('choose2')} >
					<Card items={items2} />
				</div>
				<div className = {selectedCard === 'choose3' ? 'Choosed3' :'notChoosed3'} onClick = {() => handleCardSelection('choose3')} style = {opacity('choose3')} >
					<Card items={items3} />
				</div>				
			</div>
			<div style = {selectedCard === '' ? {opacity:0} : {opacity : 1} }>
				<button className = 'CardChoiceReadyButton'><Link to = '/arena'>READY</Link></button>
			</div>
		</div>
	)
}

export default CardChoice;
