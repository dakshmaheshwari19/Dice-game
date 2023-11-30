import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import dice from '../assets/img/dice.png'
export const Home = () => {

  return (
      <>
      <div className='container'>
        <div className="innerBlock">
          <div className="imageContainer">
            <img src={dice} alt="" />
          </div>
          <div className="rightHome">
          <div className="headingContainer">
          <h1 className='heading'>Dice Game</h1>
          </div>
          <div className="playNow">
          <Link to="/game"><button className='playButton'>Play Now</button></Link>
          </div>
          
          </div>
        </div>
      </div>
      </>
  )
}
