import React from 'react'
import Card from './Card'
import './CardChoice.css'
import { Link } from 'react-router-dom'

function CardChoice( { itemschoice, itemschoice2 , itemschoice3 , selectedCard, handleCardSelection, opacity, getOpponent } ) {
	return(
		<div className = 'CardChoiceBackground'>
			<h1 className = 'CardChoiceTitle'>CHOOSE YOUR HERO</h1>
			<div className = 'CardChoiceBox'> 
				<div className = {selectedCard === 'choose1' ? 'Choosed1' :'notChoosed1'} onClick = {() => handleCardSelection('choose1')} style = {opacity('choose1')} >
					<Card items={itemschoice} />
				</div>
				<div className = {selectedCard === 'choose2' ? 'Choosed2' :'notChoosed2'} onClick = {() => handleCardSelection('choose2')} style = {opacity('choose2')} >
					<Card items={itemschoice2} />
				</div>
				<div className = {selectedCard === 'choose3' ? 'Choosed3' :'notChoosed3'} onClick = {() => handleCardSelection('choose3')} style = {opacity('choose3')} >
					<Card items={itemschoice3} />
				</div>				
			</div>
			<div style = {selectedCard === '' ? {opacity:0} : {opacity : 1} }>
				<button className = 'CardChoiceReadyButton' onClick={getOpponent}><Link to = '/arena'>READY</Link></button>
			</div>
		</div>
	)
}

export default CardChoice;
