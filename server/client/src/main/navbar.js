import {NavLink, useNavigate} from 'react-router-dom';
import IMGG from '../gallery/giga.png'
export default function Navbar() {
  const navigate= useNavigate();
    return (
      <>
        <div className='nav shadow'>
        <header>
        <nav>
        <ul className='nav-list'>
        <button type='button' onClick={()=>navigate('/viewsubscribersdata')} className='nav-button'>View Subscribers</button>
          <li className='linkone'><NavLink to="/about" className='nav-links'>About</NavLink></li> 
          <li className='linkone'><NavLink to='/' className='nav-links'>Home</NavLink></li>
          <img src={IMGG} className='nav-dp' alt='#dp' />
          </ul>
          </nav>
          </header>
  
        </div>
      </>
    )
}