import React from 'react';
import './ArenaFight.css';
import Card from './Card';

class ArenaFight extends React.Component {
  render() {
    return (
      <div className="arena_box">
        <div className="card_versus">
          <Card />
          <p className="versus_text">VS</p>
          <Card />
        </div>
        <div className="button_box">
          <button className="bonusButtonLightning" aria-label="Save" type="button" />
          <button className="bonusButtonBoxingGlove" aria-label="Save" type="button" />
          <button className="bonusButtonBook" aria-label="Save" type="button" />
        </div>
        <div className="fightButton_box">
          <button className="fightButton" type="button">FIGHT</button>
        </div>
      </div>

    );
  }
}


export default ArenaFight;
