// eslint-disable-next-line no-unused-vars
import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow-forward.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
        </div>
        <div className='mywork-container'>
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt='' />
            })}
        </div>
        <div className='mywork-showmore'>
            <p>Show more</p>
            <img src={arrow_icon} alt='' />
        </div>
    </div>
  )
}

export default MyWork