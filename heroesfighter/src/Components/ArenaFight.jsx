import React from 'react';
import './ArenaFight.css';
import Card from './Card.jsx';
import { Snackbar } from 'react-mdl';
import { Link } from 'react-router-dom';

function ArenaFight ({ mycard, opponent, getResult, isSnackbarActive, handleTimeoutSnackbar, textresult, returnbutton, counter }) {

  return (
    <div className="arena_box">
      <div className="card_versus">
        <Card items={mycard} />
        <p className="versus_text">VS</p>
        <Card items={opponent} />
      </div>
      <div className="button_box">
        <button className="bonusButtonLightning" aria-label="Save" type="button" />
        <button className="bonusButtonBoxingGlove" aria-label="Save" type="button" />
        <button className="bonusButtonBook" aria-label="Save" type="button" />
      </div>
      <div className="fightButton_box">
        <p className = 'winCounter'>Win streak: {counter}</p>
        <button className={returnbutton ? 'fightButtonoff' : 'fightButton'} type="button" onClick={getResult} >FIGHT</button>
        <a target='_blank' href = 'https://i.ibb.co/fthzXC4/etienne.png' rel='noopener noreferrer'><div className = 'element'></div></a>
        <Snackbar
          active={isSnackbarActive}
          onTimeout={handleTimeoutSnackbar}>
            {textresult}
          </Snackbar>
          <Link to='/' ><button className={returnbutton ? 'returnbutton' : 'returnbuttonoff'} >Return Home</button></Link>
      </div>
    </div>
  );
}


export default ArenaFight;
