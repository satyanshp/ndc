import React from 'react'
import bcg_img from "../img/cheerful-attractive-young-woman-with-black-hair-walking.jpg";
import "./Home.css"
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
      <div className='home'>
          <img className="home_img" src={bcg_img} alt="college-girl"/>
          <div className='btn-cont'>
            <div>
                <button>Apply</button>
            </div>
            <div>
                <button>Contact</button>
            </div>
          </div>
          <div className='home-msg'>
            <span>TEXT</span>
          <Marquee>
          This is a sample scrolling text that has scrolls texts to left.
          </Marquee>
          </div>
    </div>
  )
}

export default Home