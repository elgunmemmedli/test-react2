import React from 'react'
import {  HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Default from './LayoutComponents/Default'
import LoginLayout from './LayoutComponents/LoginLayout'
import Layouts from './Pages/Layouts'
import { ToastContainer } from 'react-toastify'
import RequireAuth from './RequireAuth'
import Error from './Pages/Error'


export default function App() {
  return (
    <Router>
      <Routes>
       <Route element={<RequireAuth/>}>
       <Route element={<Default />} >
          <Route path='/' element={<Home />} />
          <Route path='/layouts' element={<Layouts />} />
        </Route>
       </Route>


        <Route element={<LoginLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='*' element={<Error/>} />

      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        rtl
        theme='dark'
      />
    </Router>
  )
}
