import React from 'react';
import ArenaFight from './ArenaFight';
import './Home.css';
import CardChoice from './CardChoice';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      items : [],
      selectedCard : '',
      selectedHero : []
    })
    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.getResult= this.getResult.bind(this)
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

  // getFiltered() {
  //   for (let i = 1; i <= 3; i++) {
  //     let randomHero = 0
  //     do {
  //       randomHero = Math.floor(Math.random() * this.state.items.length)
  //     } while ( this.state.selectedHero.filter( selected => selected.name === this.state.items[randomHero].name).length !== 0)
  //   }
  // }

  getResult() {

    const calcul = stats => {
      const power = (stats.powerstats.power + (stats.powerstats.power * (stats.powerstats.intelligence / 100)) + (stats.powerstats.power * (stats.powerstats.speed / 100)) + stats.powerstats.durability + (stats.powerstats.power * (stats.powerstats.strength / 100)))
      return power 
    }

    console.log(calcul(this.state.items[0]))
    console.log(calcul(this.state.items[1]))

    if (calcul(this.state.items[0]) < calcul(this.state.items[1])) {
      return console.log('You Loose !')      
    } else if  (calcul(this.state.items[0]) > calcul(this.state.items[1])) {
      return console.log('You WIN !')  
    }
  }

  handleCardSelection(cardName){
    this.setState({selectedCard : cardName})
  }

  render() {

    const { items, selectedCard } = this.state;

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
          <CardChoice items={items[0]} items2={items[1]} items3={items[2]} handleCardSelection={this.handleCardSelection} selectedCard={selectedCard} />
          <ArenaFight items={items[0]} items2={items[1]} getResult={this.getResult} />
        </div>
      )
    }
  }


}

export default Home;
