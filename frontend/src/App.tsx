import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './Components/features/auth/Authcontext'
import { ToastContainer } from 'react-toastify'

function App() {
 
  return (
    <AuthProvider>
    <BrowserRouter>
        <ToastContainer/>
    
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
  
    
    </Routes>
     
    </BrowserRouter>
  </AuthProvider>
    
  )
}

export default App