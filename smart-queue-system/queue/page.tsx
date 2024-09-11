// pages/payment.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import waitImgame from "../images/queue1.png";
import locationImgame from "../images/location_logo.png";

const PaymentPage: React.FC = () => {
    const currentDate = new Date().toLocaleDateString('th-TH', { timeZone: 'Asia/Bangkok' });
    const currentTime = new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' });
    // const [currentDate, setCurrentDate] = useState < string>()
    // new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentDate(new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' }));
    //     }, 1000); // อัพเดททุก 1 วินาที

    //     // ล้าง interval เมื่อ component ถูก unmount เพื่อป้องกันปัญหา memory leak
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#CA7257]">
            <h1 className="text-6xl text-white-900 p-3 font-bold mt-1">Queue </h1>
            <div className="bg-white shadow-md rounded-lg max-w-md w-full">

                {/* Queue Text Section */}
                <div className="mt-6 flex p-2 justify-center">
                    <div className="mt-6 flex justify-end">
                        <p className="text-center text-[#CA7257] text-9xl">
                            025 <br />
                        </p>
                        <p className="text-[#CA7257] text-3xl">
                            th <br />
                        </p>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center">
                    <p className="text-[#CA7257] text-2xl">
                        POSITION IN QUEUE <br />
                    </p>
                    <p className="text-black font-light text-xl">
                        {currentDate} {currentTime} <br />
                    </p>

                    <div className="mt-6 flex justify-between">
                        {/* Placeholder for Image */}
                        <Image
                            src={locationImgame}
                            alt="Waiting Image"
                            width={30} // กำหนดขนาดที่ต้องการ
                            height={30}
                            className="object-contain"
                        />
                        <p className="text-[#CA7257] font-light text-2xl">
                            ตลาดน้อยตึกเพียรวิจิตร<br />
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col p-10 items-center">

                    {/* Placeholder for Image */}
                    <Image
                        src={waitImgame}
                        alt="Waiting Image"
                        width={320} // กำหนดขนาดที่ต้องการ
                        height={320}
                        className="object-contain"
                    />
                    <p className="text-center text-gray-900 font-bold text-4xl">
                        Please wait ...<br />
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PaymentPage;
