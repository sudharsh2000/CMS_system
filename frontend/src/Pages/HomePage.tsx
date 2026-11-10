import { Sidebar } from 'lucide-react'
import React, { useContext, useEffect } from 'react'

import { useAuth } from '../Components/features/auth/Authcontext'
import { useNavigate } from 'react-router-dom'
import HomeLayout from '../Components/layouts/HomeLayout'
import SidebarView from '../Components/ui/SidebarView'

function HomePage() {
  const {user}=useAuth()
  const navigate=useNavigate()
  useEffect(()=>{
    if(!user) navigate('/login')
  },[])
  return (
    <div className='bg-background flex w-full'>
      <SidebarView/>
      <HomeLayout/>

        
</div>
   
  )
}

export default HomePage