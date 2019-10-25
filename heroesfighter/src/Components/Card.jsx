import React from 'react';
import contactCard from './ContactCard.jsx';
import './Card.css'

class Card extends React.Component{
    render () {
        
        return(

            <div className = 'Cards'>
                 
                <div className = 'Header'>
                    <h2 className = 'Name'>
                        {contactCard.name}
                    </h2>
                    <h3 className = 'Power'>
                       POWER:<br/>  {contactCard.powerstats.power}
                    </h3>
                </div>
                <div className = 'Middle'>
                    <aside className = 'Attributs'>
                        <ul>
                        <li>intelligence:<br/> {contactCard.powerstats.intelligence}</li>
                        <li>strength:<br/> {contactCard.powerstats.strength}</li>
                        <li>speed:<br/> {contactCard.powerstats.speed}</li>
                        <li>durability:<br/>{contactCard.powerstats.durability}</li>
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



}

export default Card;