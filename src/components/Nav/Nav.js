import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
  const navigate = useNavigate()
  const [show, handleShow] = React.useState(false)

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else{
      handleShow(false )
    }
  }

  useEffect( () => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  })


  return (
    <div className={`nav ${show && 'nav__black'}`}> 
      <div className='nav__contents'>
        <img className='nav__logo' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png' alt='' onClick={ () =>  navigate('/') }/>
        <div className='navLinks'>

        </div>
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' onClick={ () =>  navigate('/profile') }/>

      </div>
    </div>
  )
}

export default Nav