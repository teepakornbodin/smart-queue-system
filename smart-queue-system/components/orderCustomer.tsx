import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

type props = {
    menu:string,
    img:any,
    qutites:number
}

function OrderCustumer({menu, img, qutites}:props) {
    const price = qutites * 10;
  return (
    <div className='flex items-center justify-around border-y border-primary py-2'>
        <Image src={img} alt='' className='w-[50px] h-[50px]'/>
        <div className='grid gap-2'>
            <div className='flex gap-5 items-center'>
                <h2>{menu}</h2>
                <RiDeleteBin6Line size={20} color='#CA7257'/>
            </div>
            <div>
                <h2 className='text-right'>{price}฿</h2>
                <div className='flex items-center gap-4 justify-end'>
                    <FaCircleMinus size={18} color='#CA7257'/>
                    <h2>{qutites}</h2>
                    <FaCirclePlus size={18} color='#CA7257'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCustumer