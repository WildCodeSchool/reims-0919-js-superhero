import React from 'react';
import ArenaFight from './ArenaFight';
import './Home.css'
import Main from './Main';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      items : []
    })
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

  getResult() {

  }


  render() {

    const { items } = this.state;
    const filterItems = items.filter(hero => hero.powerstats.intelligence !== "null")

    const randomId = Math.floor(Math.random() * Math.floor(5));
    let randomId2 = 1
    do {
      randomId2 = Math.floor(Math.random() * Math.floor(5));
    } while (randomId === randomId2)

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
      return (
        <div className='home'>
          <ArenaFight items={filterItems[randomId]} items2={filterItems[randomId2]} />
        </div>
      )
    }
  }


}

export default Home;
