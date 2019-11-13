import React from 'react';
import './Pageaccueil.css';
import { Link } from 'react-router-dom';

function Pageaccueil() {
	return (
		<div className="container"> 
			<div className="title">
			<h1>Heroes fighter</h1>
			</div>
			<div className="button">
        <Link to = "/cardchoice"><button className="buttonacces">Fight !</button></Link>
				<Link to = "/rules"><button className="buttonrule">Rules</button></Link>
			</div>
			<div className="logo">
				<img src="fond.jpg" alt="" /> 
			</div>

		</div>
	)
}

export default Pageaccueil;