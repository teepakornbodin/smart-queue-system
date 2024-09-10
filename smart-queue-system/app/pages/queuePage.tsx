// pages/payment.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import waitImgame from "../images/queue1.png";

const PaymentPage: React.FC = () => {

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
            <h1 className="text-4xl text-black font-bold mt-11">Queue </h1>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                {/* Queue Text Section */}
                <div className="flex flex-col items-center">
                    <p className="text-black">
                        th <br />
                    </p>
                    <p className="text-center text-gray-900 text-9xl">
                        025 <br /> 
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                {/* Image Section */}
                <div className="flex flex-col items-center">
                    {/* Placeholder for Image */}
                    <Image
                        src={waitImgame}
                        alt="Waiting Image"
                        width={192} // กำหนดขนาดที่ต้องการ
                        height={192}
                        className="object-contain mb-4"
                    />
                    <p className="text-center text-gray-900 text-3xl">
                        Please wait ...<br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
