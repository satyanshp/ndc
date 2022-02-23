import React from 'react'
import './partner.css'
import ibm from "../img/Adecco.png"
import aaa from "../img/NASSCOM.jpg"

const Partner = () => {
  return (
    <div className='partner'>
        <div className='pcontt rp'>
            <div><img src={ibm} alt="" /></div>
            <div className='ptxtt'>RECURITMENT PARTNERS</div>
        </div>
        
        <div className='pcontt ia'>
            <div><img src={aaa} alt="" /></div>
            <div className='ptxtt'>INDUSTRY ASSOCIATIONS</div>
        </div>
        

    </div>
  )
}

export default Partner