import React from 'react'
import './event.css'
import sss from "../img/akson-1K8pIbIrhkQ-unsplash.jpg"
import ssss from "../img/futuristic-industry-4-0-engineering-concept.jpg"

const Event = () => {
  return (
    <div className='event'>
        <div className='etxt'> <span>Event</span> </div>
        <div className='econt'>
            <div className='escont'>
                <div>
                <img src={ssss} alt="" />
                </div>
                <div>
                    <h4>Event</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dicta quaerat et esse odit deleniti, adipisci sequi sed quae modi fugit nostrum reiciendis porro eveniet excepturi velit, ullam necessitatibus illo!</p>
                </div>
            </div>
            <div className='escont'>
                <div>
                    <img src={sss} alt="" />
                </div>
                <div>
                    <h4>Event</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dicta quaerat et esse odit deleniti, adipisci sequi sed quae modi fugit nostrum reiciendis porro eveniet excepturi velit, ullam necessitatibus illo!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event