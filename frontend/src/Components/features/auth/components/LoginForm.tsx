import React, { useContext, useState } from 'react'
import carpointLogo from '../../../../assets/carepointLogo.png'
import { LogInIcon, ReceiptTextIcon, Warehouse,CalendarDays } from 'lucide-react'
import ClinicIcon from '../../../../assets/ClinicIcon.png'
import type { LoginFormProps, UServalues } from '../types'
import axios from 'axios'
import { loginApi } from '../../../../Api/Endpoints'
import { toast } from 'react-toastify'
import { useAuth } from '../Authcontext'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const {setUser}=useAuth()

  const [LoginFormData, setLoginFormData] = useState<LoginFormProps>({ username: '', password: ''});
  const navigate=useNavigate()


    const UserLoginFn=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
      try{
        const addresponse=await axios.post<UServalues>(loginApi,LoginFormData)
        console.log(addresponse.data)
        setUser({
          id:addresponse.data.id,
          username:addresponse.data.username,
          access_token:addresponse.data.access_token,
          role:addresponse.data.role


        })
        if (addresponse.status===200){
          toast.success('success')
        }
        navigate('/')

      }
      catch(err){
        console.log(err)
       
        
        toast.error('Invalid username or password')
      }

    }

  return (
    <div className=' w-full flex-row lg:flex  items-center justify-center gap-4'>
      <div className='w-[100%] lg:w-[60%]  flex flex-col items-center justify-center'>
        <div className='w-[70%] lg:w-[50%] mt-[5%] gap-1 lg:gap-8 flex flex-col border-gray-200 border-2 rounded-2xl shadow-lg shadow-gray-500 bg-whitebg p-9 '>
          <div className='flex flex-col gap-2 lg:gap-4'>
           <div className='flex gap-5 lg:gap-8'>
            
             <h2 className='text-graytextDark text-xl lg:text-3xl  font-semibold font-serif'>Sign in to CarePoint</h2>
             <img src={carpointLogo} alt='carepointLogo' className='h-6 lg:h-9' />
          </div>
          <h2 className='text-graytext text-lg'>Enter your username and password to continue.</h2>
          </div>
          <div className='w-full  items-center flex'>
            <form onSubmit={UserLoginFn} className='flex w-[100%] flex-col gap-4 lg:gap-12 mt-4'>
              <input type='text' value={LoginFormData.username} onChange={(e)=>setLoginFormData({...LoginFormData,username:e.target.value})} placeholder='Username' className='border text-black/60 shadow-md outline-gray-400 border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-transparent' />
              <input type='password' value={LoginFormData.password} onChange={(e)=>setLoginFormData({...LoginFormData,password:e.target.value})} placeholder='Password' className='border text-black/60 shadow-md outline-gray-400 border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-transparent' />
              <button type="submit" className='border border-secondary/20 text-primary shadow-md hover:bg-primary lg:text-lg hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors gap-4 flex justify-center items-center duration-300 mt-2 lg:mt-8'>Login <LogInIcon/> </button>
            </form>
          </div>
          <div className='mt-4'>
            <a href='#' className='text-primary hover:underline'>Forgot Password?</a>
          </div>

        </div>

      </div>
      <div className=' w-full lg:w-[40%] mt-[5%]   flex flex-col items-center justify-center p-4'>
       <div className='w-full items-center lg:items-start flex gap-3'>
        <div className='p-2 rounded-md'>
          <img src={carpointLogo} alt='carepointLogo' className='h-6 lg:h-7' />
        </div>
        <div className='flex gap-3  items-center lg:items-start justify-center lg:justify-start flex-col'>
        <h2 className='text-secondary font-semibold font-serif text-xl  lg:text-2xl'>CarePoint</h2>
      
        <p className='rounded-3xl bg-tertiary text-gray-600 px-2 p-1 mb-8'>Your trusted healthcare partner</p>
        </div>

        </div>
        
        
        <div className='w-full mt-[2%]'>
        <h2 className='text-primary font-semibold text-lg lg:text-xl'>Healthcare & Hospital Management </h2>
        <p className='text-graytextDark'>Centralized platform for clinical administration, clinical workflows, and pharmacy operations.</p>
        <p className='text-graytextDark'>Streamline patient care, enhance operational efficiency, and improve healthcare outcomes.</p>
        </div>
        <div className='w-full p-12 flex  items-center justify-center gap-2 lg:gap-12  mt-4 lg:mt-9'>
          <img src={ClinicIcon} alt='carepointLogo' className='h-40 w-50 lg:h-100 lg:w-80' />
         
        </div>
        

      </div>

    </div>
  )
}

export default LoginForm