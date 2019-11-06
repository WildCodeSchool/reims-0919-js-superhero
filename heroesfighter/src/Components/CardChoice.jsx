import React, {Component} from 'react'
import Card from './Card'
import './CardChoice.css'




class CardChoice extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = 'CardChoiceBackground'>
                <h1 className = 'CardChoiceTitle'>CHOOSE YOUR HERO</h1>
                <div className = 'CardChoiceBox'> 
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div>
                    <button className = 'CardChoiceReadyButton'>READY</button>
                </div>
            </div>
        )
    }


}


export default CardChoice;