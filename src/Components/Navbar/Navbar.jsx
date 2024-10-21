// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/react.svg'
import underline from '../../assets/minus.svg'
/*// eslint-disable-next-line no-unused-vars*/
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/menu-outline.svg'
import menu_close from '../../assets/close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-330px';
  }

  return (
    <div  className='navbar'>
        <img src={logo} alt='' />
        <img src={menu_icon} onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")} style={{marginBottom:'-8px'}}>Home</p></AnchorLink>{menu==="home"?<img style={{backgroundColor:'white',width:'40px',height:'8px',marginLeft:'0px',borderRadius:'5px'}} src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")} style={{marginBottom:'-8px'}}>About me</p></AnchorLink>{menu==="about"?<img style={{backgroundColor:'white',width:'40px',height:'8px',marginLeft:'0px',borderRadius:'5px'}} src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")} style={{marginBottom:'-8px'}}>Servisec</p></AnchorLink>{menu==="services"?<img style={{backgroundColor:'white',width:'40px',height:'8px',marginLeft:'0px',borderRadius:'5px'}} src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")} style={{marginBottom:'-8px'}}>Portfolio</p></AnchorLink>{menu==="work"?<img style={{backgroundColor:'white',width:'40px',height:'8px',marginLeft:'0px',borderRadius:'5px'}} src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} style={{marginBottom:'-8px'}}>Contact</p></AnchorLink>{menu==="contact"?<img style={{backgroundColor:'white',width:'40px',height:'8px',marginLeft:'0px',borderRadius:'5px'}} src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
    </div>
  )
}

export default Navbar