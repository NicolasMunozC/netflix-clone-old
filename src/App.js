import React, { useEffect } from 'react'
import './App.css';
import Home from './pages/HomeScreen/Home';
import Profile from './pages/Profile/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { auth, onAuthStateChanged } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'


function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect( () => {
    const unsubscribe = onAuthStateChanged( auth, (userCredential) => {
      if (userCredential) {
        dispatch(login({
          uid: userCredential.uid,
          email: userCredential.email
        }))
      } else {
        dispatch(logout())
      }
      
    })

    return unsubscribe
  },[dispatch])


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateRoute user={user} children={<Home />} />}/>
          <Route path='/profile' element={<PrivateRoute user={user} children={<Profile />} />}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
