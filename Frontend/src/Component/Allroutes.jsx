import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'
import SingleUser from './SingleUser'
import Homepage from './Homepage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path="/ask" element={<SingleUser/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
