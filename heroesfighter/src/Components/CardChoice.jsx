import React, {Component} from 'react'
import Card from './Card'
import './CardChoice.css'



class CardChoice extends Component {
    constructor(props){
        super(props);
        this.state ={
           
            selectedCard : '',
        }
    }
    // falseReturn(){
    //     this.state.choose1 : false,
    //     this.state.choose2 : false,
    //     this.state.choose3 : false,

    // }
    handleCardSelection(cardName){
        this.setState({selectedCard : cardName})

    }

    opacity (cardName) {
        return {
            opacity : this.state.selectedCard === '' || this.state.selectedCard === cardName ? 1 : 0.2
        }
    }
    
    render(){
        return(
            <div className = 'CardChoiceBackground'>
                <h1 className = 'CardChoiceTitle'>CHOOSE YOUR HERO</h1>
                <div className = 'CardChoiceBox'> 
                    
                    <div 
                        className = {this.state.selectedCard === 'choose1' ? 'Choosed1' :'notChoosed1'} 
                        onClick = {() => this.handleCardSelection('choose1')}
                        style = {this.opacity('choose1')} 
                    >

                        <Card />
                    
                    </div>
                    <div
                        className = {this.state.selectedCard === 'choose2' ? 'Choosed2' :'notChoosed2'} 
                        onClick = { ()=>  this.handleCardSelection('choose2')}
                        style = {this.opacity('choose2')}
                    >
                        <Card />
                    </div>
                    
                    <div 
                        className = {this.state.selectedCard === 'choose3' ? 'Choosed3' :'notChoosed3'} 
                        onClick = { ()=> this.handleCardSelection('choose3')}
                        style = {this.opacity('choose3')} 
                    >
                        <Card />
                    </div>
                    
                </div>
                <div style = {this.state.selectedCard === '' ? {opacity:0} : {opacity : 1} }>
                    <button className = 'CardChoiceReadyButton'>READY</button>
                </div>
            </div>
        )
    }


}


export default CardChoice;