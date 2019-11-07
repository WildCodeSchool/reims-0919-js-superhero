import React from 'react';
import './Pageaccueil.css'

class Pageaccueil extends React.Component {

    render () {
        const title = "Heroes fighter";
        return (
            <div className="container"> 
                <div className="title">
                <h1>{title}</h1>
                </div>
                <div className="button">
                    <button className="buttonacces">ENTER !</button>
                </div>
                <div className="logo">
                    <img src="fond.jpg" alt="" /> 
                </div>                          
            </div>
        )
    }
}

export default Pageaccueil;