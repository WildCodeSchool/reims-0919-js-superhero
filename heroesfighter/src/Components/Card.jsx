import React from 'react';
import './Card.css'

function Card ({ items }) {

  return (
    <>
      {
        items && (
          <div className = 'Cards'>      
            <div className = 'Header'>
              <h2 className = 'Name'>
                {items.name}
              </h2>
              <h3 className = 'Power'>
                <figure className = 'BoxPowerLogo'>
                  {[0, 30, 50, 80, 100].filter((threshold) => parseInt(items.powerstats.power) >= threshold).map(
                    (_, index) => (
                      <img
                        key={index}
                        src='https://zupimages.net/up/19/45/9taf.png'
                        alt='Power_Logo'
                      />
                    )
                  )}
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
                    {items.powerstats.intelligence}
                  </li>
                  <li>
                    strength
                    <br/>
                    <img src = "https://cdn1.iconfinder.com/data/icons/fitness-icon-collection/100/dumbbell-512.png" alt = 'Strength_Logo' />
                    <br/> 
                    {items.powerstats.strength}
                  </li>
                  <li>
                    speed
                    <br/>
                    <img src = "https://cdn1.iconfinder.com/data/icons/line-free/24/Forward_sign-512.png" alt = 'Speed_Logo' />
                    <br/>
                    {items.powerstats.speed}
                  </li>
                  <li>
                    vita
                    <br/>
                    <img src = "https://cdn2.iconfinder.com/data/icons/lawyer-set-square/220/advokat_set-40-512.png" alt = 'Durability_Logo' />
                    <br/>
                    {items.powerstats.durability}
                  </li>
                </ul>
              </aside>
              <div className = 'Image'>
                <img className='avatar'
                    src={items.image.url}
                    alt={items.name} />
              </div>
            </div>
            <div className = 'MyLife'>
              <p>{items.work.occupation.replace("-", `Just ${items.name}`)}</p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Card;