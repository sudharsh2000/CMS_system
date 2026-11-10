import React, { useState } from 'react'
import LoginForm from '../Components/features/auth/components/LoginForm'
import NavigationBar from '../Components/ui/NavigationBar'



function LoginPage() {
  
  return (
    <div className='w-full flex flex-col min-h-screen  bg-background '>
      <NavigationBar  />
      
      <LoginForm />
    </div>
  )
}

export default LoginPage