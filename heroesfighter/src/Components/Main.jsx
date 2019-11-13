import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

function Main() {
	return(
		<div className = 'MainBackground'>
			<div className = 'BoxButtonImg'>
				<div className = 'BoxImg'>
					<img className = 'ImgCaptainSuperman' src="https://image.noelshack.com/fichiers/2019/45/3/1573054297-superman-transparent-png-379901.png" alt=""/>
					<img src="https://image.noelshack.com/fichiers/2019/45/3/1573052628-heroes-fighter.png" alt=""/>
					<img className = 'ImgCaptainAmerica' src="https://image.noelshack.com/fichiers/2019/45/3/1573057748-comic-captain-america-transparent-png-599277.png" alt=""/>
				</div>
				<div>
					<button className = 'EnterButton'><Link to = "/cardchoice">ENTER</Link></button>
				</div>
			</div>      
		</div>
	)
}

export default Main;
