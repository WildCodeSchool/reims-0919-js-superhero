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
        console.log(cardName)
        this.setState({selectedCard : cardName})

    }
    
    render(){
        return(
            <div className = 'CardChoiceBackground'>
                <h1 className = 'CardChoiceTitle'>CHOOSE YOUR HERO</h1>
                <div className = 'CardChoiceBox'> 
                    
                    <div className = {this.state.selectedCard === 'choose1' ? 'Choosed1' :'notChoosed1'} onClick = {() => 
                       this.handleCardSelection('choose1')
                     
                    } >

                        <Card />
                    
                    </div>
                    <div className = {this.state.selectedCard === 'choose2' ? 'Choosed2' :'notChoosed2'} onClick = { ()=> 
                        this.handleCardSelection('choose2')
                    }>
                        <Card />
                    </div>
                    
                    <div className = {this.state.selectedCard === 'choose3' ? 'Choosed3' :'notChoosed3'} onClick = { ()=> 
                        this.handleCardSelection('choose3')
                    }>
                        <Card />
                    </div>
                    
                </div>
                <div>
                    <button className = 'CardChoiceReadyButton'>READY</button>
                </div>
            </div>
        )
    }


}


export default CardChoice;