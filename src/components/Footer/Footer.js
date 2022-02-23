import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <div className="footer">
          <div className='footer__about'>
              <h4>about</h4>
              <ul>
                  <li>admissions</li>
                  <li>alumni</li>
                  <li>gallery</li>
              </ul>
          </div>
          <div className='footer__courses'>
              <h4>courses</h4>
              <ul>
                  <li>undergraduate</li>
                  <li>postgraduate</li>
              </ul>
          </div>
          <div className='footer__connect'>
              <h4>connect</h4>
              <ul>
                  <li>contact us</li>
                  <li>careers</li>
                  <li>downloads</li>
                  <li>newsletter</li>
              </ul>
          </div>
          <div className='footer__socialmedia'>
              <h4>social media</h4>
              <ul>
                  <li>linkedin</li>
                  <li>facebook</li>
                  <li>instagram</li>
                  <li>youtube</li>
                  <li>twitter</li>
              </ul>
          </div>
          <div className='footer__socialmedia'>
              <h4>affiliations</h4>
              <ul>
                  <li>library</li>
                  <li>calendar of events</li>
              </ul>
          </div>
    </div>
  )
}

export default Footer