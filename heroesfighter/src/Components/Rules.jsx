import React from 'react'
import './rules.css';
import { Link } from 'react-router-dom';

function Rules() {
	return(
		<div className = 'MainBackground'>
			
					<img className = 'ImgCaptainSuperman' src="https://image.noelshack.com/fichiers/2019/45/3/1573054297-superman-transparent-png-379901.png" alt=""/>
					<div className= 'rules'>
						<h1>Game's rules</h1><br/><br/>
						<p>Welcome to "Heroes Fighter Cards Arena"<br/><br/>
							It's a card game where you will fight with random enemies<br/><br/>
							Choose one card between the three proposed<br/><br/>
							And fight until death comes<br/><br/>
							Good luck Brave!!!
						</p>
					</div>
					<img className = 'ImgCaptainAmerica' src="https://image.noelshack.com/fichiers/2019/45/3/1573057748-comic-captain-america-transparent-png-599277.png" alt=""/>
			
				
					<Link to='/'><button className = 'BackButton'>Back</button></Link>
				
			    
		</div>
	)
}


export default Rules 