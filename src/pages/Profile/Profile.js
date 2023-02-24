import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Nav from '../../components/Nav/Nav'
import "./Profile.css"
import { selectUser } from '../../features/userSlice'
// import { auth, signOut } from '../../firebase'


function Profile({setUser}) {

  const signOut = () => {
    setUser(null)
  }

    // const user = useSelector(selectUser)

  return (
    <div className='profile'>
        <Nav />
        <div className='profile__body'>
            <h1>Edit Profile</h1>
            <div className='profile__info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
                <div className='profile__details'>
                <h2>test@test.com</h2>
                <div className='profile__plans '>
                    <h3>Plans</h3>
                    <button onClick={signOut} className='profile__signOut'>Sign Out</button>
                 </div>
            </div>

            </div>

        </div>
        
    </div>
  )
}

export default Profile