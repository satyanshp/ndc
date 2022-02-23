import React from 'react'
import './explore.css'
import exp from "../img/graduation-student-hold-hats-hand-during-commencement-success-graduates-university-concept-education-congratulation.jpg"
const Explore = () => {
  return (
    <div className='explore'>
        <div className='exp-img'>
            <img src={exp} alt="" />
        </div>
        <div className='exp-txt'>Explore <br /> <strong>MBA</strong> <br /> PROGRAM</div>
    </div>
  )
}

export default Explore