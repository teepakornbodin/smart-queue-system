import React from 'react'
import { GrPrevious } from "react-icons/gr";

type props = {
    title: string
    handleClick: () => void
}

function HeaderTitle({title, handleClick}:props) {
  return (
    <div className='bg-primary flex justify-center items-center max-sm:w-[300px] w-[500px] rounded-[15px] py-4 relative'>
        <GrPrevious size={28} color='white' className='absolute left-2 cursor-pointer font-bold' onClick={handleClick}/>
        <h1 className='text-white font-semibold text-xl'>{title}</h1>
    </div>
  )
}

export default HeaderTitle