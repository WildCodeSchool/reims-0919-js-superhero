import React from 'react';
import ArenaFight from './ArenaFight';
import CardChoice from './CardChoice';
import { Switch, Route } from 'react-router-dom';
import Pageaccueil from './Pageaccueil';
import Rules from './Rules';
import './Home.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      items : [],
      selectedCard : '',
      selectedHero : [],
      chooseCard : null,
      opponent : null,
      isSnackbarActive: false,
      returnbutton : false,
      counter : 0
    })
    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.getResult= this.getResult.bind(this)
    this.opacity = this.opacity.bind(this)
    this.getOpponent = this.getOpponent.bind(this)
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this)
  }

  getSuperHero(i = 1) {

    const randomId = Math.floor(Math.random() * 730 + 1);

    fetch('https://www.superheroapi.com/api.php/157312608676119/' + randomId)
            .then(res => res.json())
            .then(json =>{
                if (json.powerstats.intelligence !== "null"){
                  this.setState({
                      items : [...this.state.items, json],
                  })
                  i++
                }
                i <= 3 && this.getSuperHero(i)
              })
  }

  componentDidMount () {
    this.getSuperHero()
  }

  getOpponent (i = 1) {
    
    const randomId = Math.floor(Math.random() * 730 + 1);

    fetch('https://www.superheroapi.com/api.php/157312608676119/' + randomId)
            .then(res => res.json())
            .then(json =>{
                if (json.powerstats.intelligence !== "null"){
                  this.setState({
                    opponent : json,
                  })
                  i++
                }
                i < 2 && this.getOpponent(i)
              })
  }


  getResult() {

    const calcul = stats => {
      const power = parseInt(stats.powerstats.power)
      return power
    }

    this.setState({ isSnackbarActive: true })

    if (calcul(this.state.chooseCard) <= calcul(this.state.opponent)) {
      this.returnMainMenu()
      this.setState({
        textresult : 'You Lose !'
      })
    } else if  (calcul(this.state.chooseCard) > calcul(this.state.opponent)) {
      this.getOpponent()
      return this.setState({
        textresult : 'You Win !',
        counter: this.state.counter +1
      })
    }
  }

  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }

  returnMainMenu() {
    this.setState({
      returnbutton : !this.state.returnbutton
    })
  }

  handleCardSelection(cardName){
    this.setState({selectedCard : cardName})
    cardName === "choose1" 
      ? this.setState({chooseCard: this.state.items[0]}) 
      : cardName === "choose2" 
      ? this.setState({chooseCard: this.state.items[1]}) 
      : cardName === "choose3" 
      ? this.setState({chooseCard: this.state.items[2]})
      : this.setState({chooseCard: null })
  }

  opacity (cardName) {
    return {
      opacity : this.state.selectedCard === '' || this.state.selectedCard === cardName ? 1 : 0.2
    }
  }

  render() {

    const { items, selectedCard, chooseCard, opponent, isSnackbarActive, textresult, returnbutton, counter } = this.state;

    if ( items.length !== 3 ) {
      return (
        <div className='loading'>
          <h4 className='load_text'>Loading...</h4>
          <div className="three col">
            <div className="loader" id="loader-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='home'>
          <Route render={({location}) => (<TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path = '/' component = {Pageaccueil} /> 
                  <Route exact path = '/rules' component = {Rules} /> 
                  <Route path = '/cardchoice' render = {() =><CardChoice itemschoice={items[0]} itemschoice2={items[1]} itemschoice3={items[2]} handleCardSelection={this.handleCardSelection} selectedCard={selectedCard} opacity={this.opacity} getOpponent={this.getOpponent} />}/>
                  <Route path='/arena' render = {() =><ArenaFight mycard={chooseCard} opponent={opponent} getResult={this.getResult} isSnackbarActive={isSnackbarActive} handleTimeoutSnackbar={this.handleTimeoutSnackbar} textresult={textresult} returnbutton={returnbutton} counter={counter} />}/>
                </Switch> 
              </CSSTransition>
            </TransitionGroup>
          )}/>
          
        </div>
      )
    }
  }
}

export default Home;
