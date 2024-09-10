'use client'
import HeaderTitle from '@/components/headerTitle'
import { useRouter } from 'next/navigation'
import React from 'react'

function ConfirmOrder() {
  const router = useRouter();
  const prevPage = () => {
    //เปลี่ยน path เอาเด้อ
    router.push('/')
  }
  return (
    <div className='grid justify-center'>
      <HeaderTitle title='Confirm Order' handleClick={prevPage}/>
      <div>
        <h2>Order Summary</h2>
        <div></div>
        <div>
          <div className='flex justify-between items-center'>
            <h2>ToTal</h2>
            <h2>฿55</h2>
          </div>
          <div>
            <h2>หมายเหตุ</h2>
            <input
              type='text'
              placeholder='ระบุหมายเหตุ เช่น ไม่ผัก น้ำเยอะ'
              
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmOrder