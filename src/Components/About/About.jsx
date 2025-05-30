// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
            <img src={theme_pattern} alt='' width={'200px'} height={'300px'} />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a Frontend developer who has been experienced with more than two years of professional expertise in the field. During my career, I was honored to cooperate with prestigious organizations, contribute to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>PHP</p><hr style={{width:"60%"}} /></div>
                    <div className='about-skill'><p>CodeIgniter</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Laravel</p><hr style={{width:"50%"}} /></div>
                    <div className='about-skill'><p>Python</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Django</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>MySQL</p><hr style={{width:"80%"}} /></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
    
  )
}

export default About
