import React from 'react';
import './ArenaFight.css'

class ArenaFight extends React.Component {
    constructor (props) {
        super(props)

    }

    render () {
        return (
            <div className = 'arena_box'>
                <div className = 'card_versus'>
                    <img src='https://www.superherodb.com/pictures2/portraits/10/100/791.jpg' alt=''  />
                    <p className = 'versus_text'>VS</p>
                    <img src='https://www.superherodb.com/pictures2/portraits/10/100/791.jpg' alt='' />
                </div>
            </div>
        )
    }
}




export default ArenaFight;