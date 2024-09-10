// pages/payment.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import qrImage from "../images/qrCode.png";

const PaymentPage: React.FC = () => {
    const router = useRouter();
    
    // useEffect(() => {
    //     // ตั้งเวลา 5 นาที (300,000 มิลลิวินาที)
    //     const timer = setTimeout(() => {
    //       router.push('/order'); // กลับไปที่หน้าชื่อว่า Order
    //     }, 300000);
    //     // ล้าง Timer เมื่อ Component ถูก unmount
    //     return () => clearTimeout(timer);
    //   }, [router]);
    

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        {/* QR Code Section */}
        <div className="flex flex-col items-center">
          {/* Placeholder for QR Code Image */}
          <Image 
            src={qrImage} 
            alt="QR Code" 
            width={192} // กำหนดขนาดที่ต้องการ
            height={192} 
            className="object-contain mb-4"
          />
          <p className="text-center text-gray-600">
            สแกน QR เพื่อโอนเข้าบัญชี<br />
            ชื่อ: น.ส. ปริญดา โคตะนิวงษ์<br />
            บัญชี: xxx-x-x6406-x<br />
            เลขที่อ้างอิง: 004999122325136
          </p>
        </div>
        
        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            ยกเลิก
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            ตกลง
          </button>
        </div>
      </div>

      {/* Timer Message */}
      <p className="mt-4 text-red-500 text-center">
        กรุณาชำระเงินภายใน 5 นาที
      </p>
    </div>
  );
};

export default PaymentPage;
