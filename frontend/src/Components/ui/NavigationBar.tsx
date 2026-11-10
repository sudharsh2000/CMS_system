import React from 'react'
import carePointLogo from '../../assets/carepointLogo.png'
import carepointLogo2 from '../../assets/carepointLogo2.png'
import { useAuth } from '../features/auth/Authcontext'
import { Bell, DotIcon, Search } from 'lucide-react'
import type { ParentName } from '../../Types/menutypes'
function NavigationBar( ) {
    let parent=""
    const {user,setUser}=useAuth()
  return (
    <div className='w-full h-20 bg-whitebg text-white flex  shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] shadow-gray-300 items-center justify-between px-4'>
      {parent==='login' && <div className='text-[30%] lg:w-[20%] px-4 flex  items-center space-x-2'>
            <img src={carepointLogo2} alt='carepointLogo' className='h-8 lg:h-12' />
            <h2 className='text-primary text-lg  lg:text-2xl font-semibold font-serif'>Care Point</h2>
        </div>
      }
        
      {user && <div className='flex w-full justify-between items-center'>
        <div className='w-[15%] flex gap-2'>
          <p className='text-graytextDark'>{`carepoint >`}</p>
          <p className='text-gray-500'>  dashboard</p>

            </div>
            <div className='w-[25%] flex gap-2 lg:gap-5  items-center'>
                <div className='flex gap-3 items-center border border-primary/30 px-2 rounded-md'>
                    <Search className='text-primary/30'/>
                    <input className='border-0 p-2 outline-0 text-primary/40' placeholder=' Search....' />
                </div>
                <Bell  className='hover:text-primary/50 cursor-pointer text-primary/30'/>
                <button className='rounded-full bg-primary/10 cursor-pointer text-primary/60 p-2'>SU</button>
                </div>
                </div>
        
        
        }

    </div>
  )
}

export default NavigationBar