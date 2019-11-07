import React from 'react';
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className="container"> 
                <div className="title">
                    <p> Heroes fighter </p>
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

export default Home;