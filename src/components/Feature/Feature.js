import React from 'react'
import './feature.css'
import ttt from "../img/01-Freedom.png"
import tt from "../img/02-Employment.png"
import tot from "../img/03-Electives.png"
import tet from "../img/05-Wifi.png"
import tqt from "../img/07-Labs.png"
import tat from "../img/13-Food-Courts.png"

const Feature = () => {
  return (
    <div className='feature'>
      <div className='fimgcontt'>
           <img src={ttt} alt="" />
            <img src={tt} alt="" />
            <img src={tot} alt="" />
            <img src={tet} alt="" />
            <img src={tqt} alt="" />
            <img src={tat} alt="" />
      </div>
      <div>
        <p>SALIENT FEATURES</p>
      </div>
            
    </div>
  )
}

export default Feature