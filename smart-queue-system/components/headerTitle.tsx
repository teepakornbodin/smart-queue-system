'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { GrPrevious } from "react-icons/gr";

type props = {
    title: string
}

function HeaderTitle({title}:props) {
  const router = useRouter();
  return (
    <div className='bg-primary flex justify-center items-center max-sm:w-[300px] w-[500px] rounded-[15px] py-4 relative'>
        <GrPrevious size={28} color='white' className='absolute left-2 cursor-pointer font-bold' onClick={() => router.back()}/>
        <h1 className='text-white font-semibold text-xl'>{title}</h1>
    </div>
  )
}

export default HeaderTitle