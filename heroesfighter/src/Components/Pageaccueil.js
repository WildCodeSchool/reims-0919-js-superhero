import React from 'react';
import './Pageaccueil.css';



function Pageaccueil() {
    return (
        <div className="container"> 
            <div className="title">
            <h1>Heroes fighter</h1>
            </div>
            <div className="button">
                <button className="buttonacces"> Fight !</button>
                <button className="buttonrule"> Rule </button>
            </div>
            <div className="logo">
                <img src="fond.jpg" alt="" /> 
            </div>

        </div>
    )
}

export default Pageaccueil;