// pages/payment.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import qrImage from "../images/qrCode.png";
import { FiArrowLeft } from 'react-icons/fi';


const PaymentPage: React.FC = () => {
  // const [price, setPrice] = useState([])
  const price = 50;
    
    // useEffect(() => {
    //     // ตั้งเวลา 5 นาที (300,000 มิลลิวินาที)
    //     const timer = setTimeout(() => {
    //       router.push('/order'); // กลับไปที่หน้าชื่อว่า Order
    //     }, 300000);
    //     // ล้าง Timer เมื่อ Component ถูก unmount
    //     return () => clearTimeout(timer);
    //   }, [router]);
    //CA7257 color
  return (
    <div className="min-h-screen grid items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        
        <div className='bg-[#CA7257] rounded-lg relative flex justify-center p-1.5 mt-1.5'>
          <button className='absolute left-2'><FiArrowLeft color='white'/></button>
          <div>
            <p className='text-white text-xs'>ชำระเงิน</p>
          </div>
        </div>
        {/* QR Code Section */}
        <div className="flex flex-col items-center m-1">
          {/* Placeholder for QR Code Image */}
          <Image 
            src={qrImage} 
            alt="QR Code" 
            width={185} // กำหนดขนาดที่ต้องการ
            height={185} 
            className="object-contain mb-4 border-1 scale-[80%]"
          />
          <div className='bg-[#045188] border-1 border-red-200 rounded-lg'>
            <p className=" text-center text-white text-xs px-4 py-2">
              สแกน QR เพื่อชำระเงิน<br />
              ยอดชำระ {price} บาท
            </p>
          </div>
        </div>

        {/* Timer Message */}
      <p className="mt-4 text-red-500 text-center text-xs">
        กรุณาชำระเงินภายใน 5 นาที
      </p>
        
        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-xs">
            ยกเลิก
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-xs">
            ตกลง
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
