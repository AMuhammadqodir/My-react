// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profiles.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img className='profile-1' src={profile_img} alt='' width={'250px'} height={'240px'}  />
        <h1><span>I`m Muhammadqodir Arslonov,</span> frontend developer based in Tajikistan.</h1>
        <p>I am a frontend developer of Sogd, with Tajikistan 2 years of experience at Khujand State University.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero;
