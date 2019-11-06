import React from 'react';
import ArenaFight from './ArenaFight';
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      items : []
    })
    this.getRandom = this.getRandom.bind(this)
    this.getFiltered = this.getFiltered.bind(this)
  }

  getSuperHero(i = 1) {

    const randomId = Math.floor(Math.random() * Math.floor(730) + 1);

    fetch('https://www.superheroapi.com/api.php/157312608676119/' + randomId)
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    items : [...this.state.items, json],
                })
                i < 10 && this.getSuperHero(i + 1)
              })
  }

  componentDidMount () {
    this.getSuperHero()
  }

  getRandom() {
    const randomId = Math.floor(Math.random() * 8 + 1);
    return randomId
  }

  getFiltered() {
    const filterItems = this.state.items.filter(hero => hero.powerstats.intelligence !== "null")
    return filterItems
  }

  otherRandom() {
    let randomId2 = 1
    do {
      randomId2 = Math.floor(Math.random() * 8 + 1);
    } while (this.getRandom() === randomId2)
    return randomId2
  }

  render() {

    const { items } = this.state;

    if ( !items[9] ) {
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
      console.log(this.otherRandom())
      return (
        <div className='home'>
          <ArenaFight items={this.getFiltered()[this.getRandom()]} items2={this.getFiltered()[this.otherRandom()]} />
        </div>
      )
    }
  }


}

export default Home;
