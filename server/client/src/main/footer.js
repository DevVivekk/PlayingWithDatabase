import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <footer>
            <div className='footer-items'><NavLink className='footer-links'>Ping Me</NavLink></div>
            <div  className='footer-items'><NavLink className='footer-links'>Github</NavLink></div>
            <div  className='footer-items'><NavLink className='footer-links'>Copyright</NavLink></div>
            
        </footer>
    </div>
  )
}

export default Footer