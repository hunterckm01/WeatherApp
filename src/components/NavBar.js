import React from 'react'
import ColorPicker from './ColorPicker'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full flex max-w-[600px] mx-auto justify-between pt-[12px]'>
        <NavLink to = "/">
            <button className='py-[8px] px-[12px] bg-cyan-700 text-slate-100 rounded-md hover:bg-cyan-900'>
                Weather
            </button>
           
        </NavLink>
        
        <NavLink to = "/color-picker">
            <button className='py-[8px] px-[12px] bg-pink-700 text-slate-100 rounded-md hover:bg-pink-900'>
                Color Picker
            </button>
        </NavLink>
        
    </div>
  )
}

export default NavBar
