import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <Link to = '/home'>
      <div className={style.aLanding}>
          <h1>Ingresar a Countries!</h1>
      </div>
    </Link>
  )
};

export default Landing;
