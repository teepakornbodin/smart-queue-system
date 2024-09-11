'use client'
import HeaderTitle from '@/components/headerTitle'
import OrderCustumer from '@/components/orderCustomer';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMenu, decreaseQuantityMenu, removeMenu } from "@/redux/slices/counterSlice";

function ConfirmOrder() {
  const menuLists = useSelector((state: RootState) => state.menu.menuLists)
  const dispatch = useDispatch()

  const deleteMenu = (menuName: string) => {
    dispatch(removeMenu(menuName))
  }

  const handleIncrease = (quantities: number, menu: string, img: any) => {
    dispatch(addMenu({ menu, img, quantities}))
  };

  const handleDecrease = (menu: string) => {
    dispatch(decreaseQuantityMenu(menu))
  };

  
  return (
    <div className='grid justify-center'>
      <HeaderTitle title='Confirm Order'/>
      <div>
        <h2>Order Summary</h2>
        <div>
          {menuLists.map((item) => (
            <OrderCustumer 
              menu={item.menu} 
              img={item.img} 
              quantites={item.quantities}
              remove={() => deleteMenu(item.menu)}
              increase={() => handleIncrease(item.quantities, item.menu, item.img)}
              decrease={() => handleDecrease(item.menu)}
            />
          ))}
        </div>
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