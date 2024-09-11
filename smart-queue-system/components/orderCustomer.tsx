import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

type props = {
    menu:string,
    img:any,
    quantites:number,
    remove:() => void,
    increase:() => void,
    decrease:() => void,
}

function OrderCustumer({menu, img, quantites, remove, increase, decrease}:props) {
    const price = quantites * 10;

    if (menu === null || img === null || quantites === 0) {
        return (
            <div>
                <h1 className='text-red-500'>คุณยังไม่ได้เลือกเมนู</h1>
            </div>
        )
    }
  return (
    <div className='flex items-center justify-around border-y border-primary py-2'>
        <Image src={img} alt='' className='w-[70px] h-[70px] object-cover'/>
        <div className='grid gap-2'>
            <div className='flex gap-5 items-center'>
                <h2>{menu}</h2>
                <RiDeleteBin6Line size={20} color='#CA7257' onClick={remove}/>
            </div>
            <div>
                <h2 className='text-right'>{price}฿</h2>
                <div className='flex items-center gap-4 justify-end'>
                    <FaCircleMinus size={18} color='#CA7257' onClick={decrease}/>
                    <h2>{quantites}</h2>
                    <FaCirclePlus size={18} color='#CA7257' onClick={increase}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCustumer