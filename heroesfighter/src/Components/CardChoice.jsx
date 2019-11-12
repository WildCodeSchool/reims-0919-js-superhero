import React from 'react'
import Card from './Card'
import './CardChoice.css'



function CardChoice( { items, items2 , items3 , selectedCard, handleCardSelection } ) {
	return(
		<div className = 'CardChoiceBackground'>
			<h1 className = 'CardChoiceTitle'>CHOOSE YOUR HERO</h1>
			<div className = 'CardChoiceBox'> 
				<div className = {selectedCard === 'choose1' ? 'Choosed1' :'notChoosed1'} onClick = {() => handleCardSelection('choose1')} >
					<Card items={items} />
				</div>
				<div className = {selectedCard === 'choose2' ? 'Choosed2' :'notChoosed2'} onClick = {() => handleCardSelection('choose2')}>
					<Card items={items2} />
				</div>
				<div className = {selectedCard === 'choose3' ? 'Choosed3' :'notChoosed3'} onClick = {() => handleCardSelection('choose3')}>
					<Card items={items3} />
				</div>				
			</div>
			<div>
				<button className = 'CardChoiceReadyButton'>READY</button>
			</div>
		</div>
	)
}

export default CardChoice;
