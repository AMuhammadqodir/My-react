// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/ios-mail.svg'
import call_icon from '../../assets/call.svg'
import location_icon from '../../assets/location.svg'

const Contact = () => {

    const onSubmit = async (Event)=> {
        Event.preventDefault();
        const formData = new FormData(Event.target);

        formData.append("access_key", "46d62548-2067-424d-8612-61bd6710849a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let`s talk</h1>
                <p>I`m currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt='' /> 
                        <p>admin@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt='' width={'40px'} height={'30px'} style={{marginTop:"10px"}} /> <p>+992400047269</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt='' /> 
                        <p>Sughd</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor='contact-name'>Your name</label>
                <input id='contact-name' type='text' placeholder='Enter your name' name='name' />
                <label htmlFor='contact-email'>Your email</label>
                <input id='contact-email' type='email' placeholder='Enter your email' name='email' />
                <label htmlFor='contact-message'>Write your message here</label>
                <textarea id='contact-message' rows='8' placeholder='Enter your message' name='message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact