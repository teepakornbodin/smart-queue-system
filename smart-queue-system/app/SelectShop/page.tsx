'use client'
import Image from 'next/image';
import React from 'react'
import Shabu from '../images/shabu.png'
import { useRouter } from 'next/navigation';
import HeaderTitle from '@/components/headerTitle';

function SelectShop() {

    const router = useRouter();

    const backToHome = () => {
        router.push('/')
    }
    const handleClick = () => {
        // แก้pathเอาเด้อ
        router.push('/')
    }

    return (
        <div className='grid justify-center items-center gap-10'>
            <HeaderTitle title='เลือกร้านค้า' handleClick={backToHome}/>
            <div 
                className='grid max-sm:w-[300px] rounded-[25px] shadow-config cursor-pointer'
                onClick={handleClick}
            >
                <Image
                    src={Shabu}
                    alt=''
                    className='object-cover rounded-t-[25px] h-[165px]'
                />
                <h2 className='py-4 pl-5'>ชาบูเสียบไม้</h2>
            </div>
        </div>
    )
}

export default SelectShop