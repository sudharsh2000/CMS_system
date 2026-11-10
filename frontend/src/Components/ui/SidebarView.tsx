import React from 'react'
import carepointLogo2 from '../../assets/carepointLogo2.png'
import { ArrowDownToLine, CalendarDays, LayoutDashboard, LucideBandage, LucideNotepadTextDashed, NotepadText, RefreshCw, ScrollText, ShoppingCartIcon, Stethoscope, TimerIcon, UserGroup } from 'lucide-react'


function SidebarView() {
  return (
    <div className='w-[20%] flex  shadow-[0_8px_px_-6px_rgba(0,0,0,0.3)] flex-col border-r border-gray-300     bg-whitebg p-2'>

    
        <div className='flex p-2 gap-4'>
        <img src={carepointLogo2}  className='h-12'/>
           <div className='flex gap-1 flex-col'>
              <h2 className='text-primary text-lg  lg:text-2xl font-semibold font-serif'>Care Point</h2>

              <h2 className='text-graytext text-sm  '>CLINIC MANAGEMENT</h2>

           </div>  

        </div>
        <div className='flex p-2 gap-4 flex-col mt-8 overflow-auto max-h-[80%]'>
         <div className='flex flex-col p-3 my-3 gap-6'>
          <h2 className='text-graytextDark text-sm'>OVERVIEW</h2>

        
         <div className='flex gap-2 cursor-pointer hover:bg-primary/20 hover:text-primary rounded-md hover:scale-105 items-center px-3 lg:gap-3'>
          <LayoutDashboard className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center  '>Dashboard</p>


         </div>
          </div>
          <div className='flex flex-col p-3 my-3 gap-6'>
          <h2 className='text-graytextDark text-sm'>PATIENT-CARE</h2>

        
         <div className='flex gap-2 cursor-pointer hover:bg-primary/20 hover:scale-105 rounded-md items-center px-3 lg:gap-3'>
          <UserGroup className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Patients</p>


         </div>
          <div className='flex gap-2 cursor-pointer hover:scale-105 hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <CalendarDays className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Appoinments</p>


         </div>
          <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <TimerIcon className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Doctor queue</p>


         </div>
          <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <Stethoscope className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Consultation</p>


         </div>
          <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <LucideNotepadTextDashed className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Prescription</p>


         </div>
          </div>
            <div className='flex flex-col p-3 my-3 gap-6'>
          <h2 className='text-graytextDark text-sm'>PHARMACY & BILLING</h2>

        
         <div className='flex gap-2 cursor-pointer hover:bg-primary/30 hover:scale-105 rounded-md items-center px-3 lg:gap-3'>
          <ShoppingCartIcon className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Pharmacy POS</p>


         </div>
          <div className='flex gap-2 cursor-pointer hover:scale-105 hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <NotepadText className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Sales & Invoices</p>


         </div>
          <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <ScrollText className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Purchase Invoices</p>


         </div>
          <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <LucideBandage className='text-primary/50 hover:text-primary'/>

          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Inventory</p>


         </div>
          <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <ArrowDownToLine className='text-primary/50 hover:text-primary'/>
          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Stock Adjustments</p>
         </div>
         <div className='flex gap-2 hover:scale-105 cursor-pointer hover:bg-primary/30 rounded-md items-center px-3 lg:gap-3'>
          <RefreshCw className='text-primary/50 hover:text-primary'/>
          <p className=' p-2 rounded-lg text-primary/50 hover:text-primary font-semibold text-center '>Returns & Refunds</p>
         </div>
          </div>
           

        </div>

    </div>
  )
}

export default SidebarView