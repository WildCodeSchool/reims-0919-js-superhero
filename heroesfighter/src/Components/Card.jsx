import React from 'react';
import './Card.css'

function Card ({ items }) {

  let className = 'PowerLogo';
  let className2 = 'PowerLogo';
  let className3 = 'PowerLogo';
  let className4 = 'PowerLogo';
  let className5 = 'PowerLogo';
  if (items) {
    if (items.name && parseInt(items.powerstats.power) < 20) {
      className = 'PowerLogoOff';
    }
    if (items.name && parseInt(items.powerstats.power) < 40) {
      className2 = 'PowerLogoOff';
    }
    if (items.name && parseInt(items.powerstats.power) < 60) {
      className3 = 'PowerLogoOff';
    }
    if (items.name && parseInt(items.powerstats.power) < 80) {
      className4 = 'PowerLogoOff';
    }
    if (items.name && parseInt(items.powerstats.power) < 100) {
      className5 = 'PowerLogoOff';
    }
  }
  
  return(   
      
      <div className = 'Cards'>      
          <div className = 'Header'>
              <h2 className = 'Name'>
                  {items && items.name}
              </h2>
              <h3 className = 'Power'>
                  
                  <figure className = 'BoxPowerLogo'>
                    <img className = {className} src= 'https://zupimages.net/up/19/45/9taf.png' alt = 'Power_Logo' />
                    <img className = {className2} src= 'https://zupimages.net/up/19/45/9taf.png' alt = 'Power_Logo' />
                    <img className = {className3} src= 'https://zupimages.net/up/19/45/9taf.png' alt = 'Power_Logo' />
                    <img className = {className4} src= 'https://zupimages.net/up/19/45/9taf.png' alt = 'Power_Logo' />
                    <img className = {className5} src= 'https://zupimages.net/up/19/45/9taf.png' alt = 'Power_Logo' />

                  </figure> 
              </h3>
          </div>
          <div className = 'Middle'>
              <aside className = 'Attributs'>
                  <ul>
                    <li>
                      intel
                      <br/>
                      <img src = "https://cdn2.iconfinder.com/data/icons/miscellaneous-31/60/android-brain-512.png" alt = 'Inteligence_Logo' />
                      <br/> 
                      {items && items.powerstats.intelligence}
                    </li>
                    <li>
                      strength
                      <br/>
                      <img src = "https://cdn1.iconfinder.com/data/icons/fitness-icon-collection/100/dumbbell-512.png" alt = 'Strength_Logo' />
                      <br/> 
                      {items && items.powerstats.strength}
                    </li>
                    <li>
                      speed
                      <br/>
                      <img src = "https://cdn1.iconfinder.com/data/icons/line-free/24/Forward_sign-512.png" alt = 'Speed_Logo' />
                      <br/>
                      {items && items.powerstats.speed}
                    </li>
                    <li>
                      vita
                      <br/>
                      <img src = "https://cdn2.iconfinder.com/data/icons/lawyer-set-square/220/advokat_set-40-512.png" alt = 'Durability_Logo' />
                      <br/>
                      {items && items.powerstats.durability}
                    </li>
                  </ul>
              </aside>
              <div className = 'Image'>
              <img className='avatar'
                  src={items && items.image.url}
                  alt={items && items.name} />
              </div>
          </div>
          <div className = 'MyLife'>

              <p>{items && items.work.occupation.replace("-", `Just ${items && items.name}`)}</p>
          </div>
      </div>
  )
}

export default Card;
