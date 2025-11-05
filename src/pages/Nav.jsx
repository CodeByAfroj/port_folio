import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <>
       <div className='h-12 bg-gray-700'>
           <div className='h-12 p-2 flex flex-row  justify-between '>
               <div className=" bg-gradient-to-r from-rose-500 to-purple-500 text-transparent bg-clip-text font-bold text-2xl px-2 ml-2">LOGO</div>
               <div className='flex flex-row gap-5 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-[17px] mr-2'>
                  <div className=' hover:outline-2 hover:outline-purple-500 rounded-md  '><Link to="/">Home</Link> </div>
                  <div className=' hover:outline-2 hover:outline-purple-500 rounded-md'> <Link to='/about'>About  </Link></div>
                  <div className=' hover:outline-2 hover:outline-purple-500 rounded-md'> <Link to='/contact'>Contact</Link></div> 

               </div>
           </div>
       </div>
     
     </>
  )
}

export default Nav