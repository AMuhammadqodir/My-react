// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <p>I am a frontend developer from Sogd, Tajikistan with 2 years of experience in multiple companies like ZYPL-AI, Silk Road Professionals and Alif.</p>
          </div>
          <div className='footer-top-right'>
            <div className='footer-email-input'>
              <img src={user_icon} alt='' />
              <input type='email' placeholder='Enter your email' />
            </div>
            <div className='footer-subscribe'>Subscribe</div>
          </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
          <p className='footer-bottom-left'>&copy; 2024 Arslonov. All rights reserved.</p>
          <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;