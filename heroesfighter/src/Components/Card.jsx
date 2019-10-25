import React from 'react';
import contactCard from './ContactCard.jsx';
import './Card.css'

function Card () {
  return(
      
      <div className = 'Cards'>      
          <div className = 'Header'>
              <h2 className = 'Name'>
                  {contactCard.name}
              </h2>
              <h3 className = 'Power'>
                  <p>
                    <span>POWER</span>
                  </p>
                  <figure>
                    <img src='https://cdn2.iconfinder.com/data/icons/superhero-neon-circle/64/10-superhero-512.png' alt = 'Power_Logo' />
                  </figure> 
                  {contactCard.powerstats.power}
              </h3>
          </div>
          <div className = 'Middle'>
              <aside className = 'Attributs'>
                  <ul>
                    <li>
                      intelligence
                      <br/>
                      <img src = "https://cdn2.iconfinder.com/data/icons/miscellaneous-31/60/android-brain-512.png" alt = 'Inteligence_Logo' />
                      <br/> 
                      {contactCard.powerstats.intelligence}
                    </li>
                    <li>
                      strength
                      <br/>
                      <img src = "https://cdn1.iconfinder.com/data/icons/fitness-icon-collection/100/dumbbell-512.png" alt = 'Strength_Logo' />
                      <br/> 
                      {contactCard.powerstats.strength}
                    </li>
                    <li>
                      speed
                      <br/>
                      <img src = "https://cdn1.iconfinder.com/data/icons/line-free/24/Forward_sign-512.png" alt = 'Speed_Logo' />
                      <br/>
                      {contactCard.powerstats.speed}
                    </li>
                    <li>
                      durability
                      <br/>
                      <img src = "https://cdn2.iconfinder.com/data/icons/lawyer-set-square/220/advokat_set-40-512.png" alt = 'Durability_Logo' />
                      <br/>
                      {contactCard.powerstats.durability}
                    </li>
                  </ul>
              </aside>
              <div className = 'Image'>
              <img className='avatar'
                  src={contactCard.image.url}
                  alt="nothing" />
              </div>
          </div>
          <div className = 'MyLife'>
              <h3>Who i am?</h3>
              <p>{contactCard.work.occupation}</p>
          </div>
      </div>
  )
}

export default Card;
