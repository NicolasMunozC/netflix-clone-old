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
import SignIn from './components/SignIn/SignIn';
import Login from './pages/Login/Login';


function App() {

  const [user, setUser] = React.useState(null)

  // const user = useSelector(selectUser)

  // const dispatch = useDispatch()

  // useEffect( () => {
  //   const unsubscribe = onAuthStateChanged( auth, (fakeCredentials) => {
  //     if (fakeCredentials) {
  //       dispatch(login({
  //         uid: fakeCredentials.uid,
  //         email: fakeCredentials.email
  //       }))
  //     } else {
  //       dispatch(logout())
  //     }
      
  //   })

  //   return unsubscribe
  // },[dispatch])


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home setUser={setUser} /> : <Login setUser={setUser} />}/>
          <Route path='/profile' element={user ? <Profile setUser={setUser} /> : <Navigate to='/' /> } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
