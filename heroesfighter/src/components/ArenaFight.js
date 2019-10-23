import React from 'react';
import "./ArenaFight.css"

class ArenaFight extends React.Component {
    constructor(props) {
        super(props)

    }

    render (){
        return (
            <div className = 'arena_box'>
                <div>
                    <img></img>
                </div>
                <div>
                
                </div>

                <div className = 'button_box'>
                    <button className = 'bonusButtonLightning'></button>
                    <button className = 'bonusButtonBoxingGlove'></button>
                    <button className = 'bonusButtonBook'></button>
                </div>

                <div className = 'fightButton_box'>
                    <button className = 'fightButton'>FIGHT</button>
                </div>



                
            </div>

        )
    }
}

export default ArenaFight;