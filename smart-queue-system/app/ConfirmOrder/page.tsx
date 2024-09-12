'use client'
import HeaderTitle from '@/components/headerTitle'
import OrderCustumer from '@/components/orderCustomer';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMenu, decreaseQuantityMenu, removeMenu, setPrice } from "@/redux/slices/counterSlice";

function ConfirmOrder() {
  const router = useRouter()
  const menuLists = useSelector((state: RootState) => state.menu.menuLists)
  const dispatch = useDispatch()

  const deleteMenu = (menuName: string) => {
    dispatch(removeMenu(menuName))
  }

  const handleIncrease = (quantities: number, menu: string, img: any) => {
    dispatch(addMenu({
      menu, img, quantities,
      price: 0 // add initial value of price; tle
    }))
  };

  const handleDecrease = (menu: string) => {
    const existingItem = menuLists.find(item => item.menu === menu);
    if (existingItem && existingItem.quantities > 1) {
      dispatch(decreaseQuantityMenu(menu));
    }
  };

  const total = menuLists.reduce((sum, item) => sum + (item.quantities * 10), 0)
  // useEffect(() => {
  //   console.log(menuLists)
  // },[menuLists])

  const backToOrder = () => {
    router.push('order')
  }
  //function onClick in button pay bill
  const goToPayment = () => {
    router.push('payment')
  }

  //send price into redux, it calculate realtime cuz i calculate with every function in redux; tle
  useEffect(() => {
    dispatch(setPrice(total)) // ส่งราคาทั้งหมดลง Redux
  }, [total, dispatch]);

  return (
    <div className='flex flex-col items-center gap-5 bg-primary pt-5 h-screen'>
      <HeaderTitle title={'Confrim Order'} link={backToOrder} />
      <div className='bg-white w-screen rounded-t-3xl px-8 py-2 relative h-full'>
        {menuLists.length > 0 ? (
          <div>
            <h2 className='font-medium text-xl my-4'>Order Summary</h2>
            <div>
              {menuLists.map((item) => (
                <OrderCustumer
                  key={item.menu}
                  menu={item.menu}
                  img={item.img}
                  quantites={item.quantities}
                  remove={() => deleteMenu(item.menu)}
                  increase={() => handleIncrease(item.quantities, item.menu, item.img)}
                  decrease={() => handleDecrease(item.menu)}
                />
              ))}
            </div>
            <div className='sticky bottom-0 left-0 w-full py-4 bg-white flex flex-col justify-center gap-6 border-t-2 border-primary'>
              <div className='flex justify-between items-center'>
                <h2 className='text-lg font-medium'>ToTal</h2>
                <h2 className='text-lg font-medium'>฿{total}</h2>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='font-medium text-lg'>หมายเหตุ</h2>
                <input
                  type='text'
                  placeholder='ระบุหมายเหตุ เช่น ไม่ผัก น้ำเยอะ'
                  className='border border-black rounded-xl px-4 py-2'
                />
              </div>
              <button className='bg-primary rounded-xl py-3'>
                <h2 className='text-white text-xl'>Confirm Order</h2>
              </button>
            </div>
            <button className='bg-primary rounded-xl py-3' onClick={goToPayment}>
              <h2 className='text-white text-xl'>Confirm Order</h2>
            </button>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center w-full rounded-t-3xl h-full'>
            <h2 className='text-2xl text-primary font-medium'>โปรดเลือกเมนูของคุณ</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConfirmOrder