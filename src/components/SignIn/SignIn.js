import React, { useRef } from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../firebase'
import './SignIn.css'

function SignIn({setUser}) {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
            setUser({
                email: 'test@test.com',
                uid: '1'
            })
        // createUserWithEmailAndPassword(
        //     auth,
        //     emailRef.current.value,
        //     passwordRef.current.value
        // ).then( (authUser) => {
        //     console.log(authUser)
        // }).catch( error => { 
        //     console.log(error.message)
        // })
    }

    const signIn = (e) => {
        e.preventDefault()
            setUser({
                email: 'test@test.com',
                uid: '1'
            })
        // signInWithEmailAndPassword(
        //     auth,
        //     emailRef.current.value,
        //     passwordRef.current.value,
        //     ).then( (authUser) => {
        //         console.log(authUser)
        //     }).catch( error => { 
        //         console.log(error.message)
        //     })
    }

  return (
    <div className='signIn'>
        <form onSubmit={signIn}>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email' value='test@test.com'/>
            <input ref={passwordRef} placeholder='Pasword' type='password' value='test123'/>
            <button type='submit'>Sign In</button>
            <h4>
                <span className='signIn__gray'>New to Netflix? </span>
                <span className='signIn__link' onClick={register}>Sign Up now.</span>
                </h4>
        </form>
    </div>
  )
}

export default SignIn