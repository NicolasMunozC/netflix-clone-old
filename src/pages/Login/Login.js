import React, { useState } from 'react'
import SignIn from '../../components/SignIn/SignIn'
import './Login.css'

function Login() {

    const [signIn, setSignIn] = useState(false)

  return (
    <div className='login'>
        <div className='login__background'>
            <img className='login__logo' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png' alt=''/>

            <button className='login__button' onClick={() => setSignIn(true)}>Sign In</button>
            
            <div className='login__gradient' />

        </div>


        <div className='login__body'>
            {signIn ? 
            <SignIn />
            :
            <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time. </h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='login__input'>
                <form>
                    <input type='email' placeholder='Email Address'  />
                    <button className='login__getStarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                </form>
            </div>
        </>}
        </div>

    </div>
  )
}

export default Login