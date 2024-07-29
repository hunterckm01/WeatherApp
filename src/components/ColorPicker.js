import React from 'react'
import { useState } from 'react';

const ColorPicker = () => {

  const [colorCode , setColorCode] = useState("Pick Color");

  return (
    <div className='max-w-[500px] mx-auto bg-red-800 py-[20px] gap-y-5 mt-[200px] flex flex-col justify-center items-center'>
        <div>
            <h2 className='text-3xl font-semibold text-slate-700'>Color Picker</h2>
        </div>

        <input type='color' value = {colorCode} onChange= {(e)=>setColorCode(e.target.value)} className='h-[20px] '/>

        <div className='px-[12px] py-[8px] text-white bg-slate-600 rounded-md cursor-pointer'>{colorCode}</div>
    </div>
  )
}

export default ColorPicker
