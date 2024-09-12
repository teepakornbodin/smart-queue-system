"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import waitImgame from '../images/queue1.png';
import locationImgame from "../images/location_logo.png";


const QueuePage: React.FC = () => {
    const [userQueue, setUserQueue] = useState(2);
    const [currentQueue, setCurrentQueue] = useState(2);

    const currentDate = new Date().toLocaleDateString('th-TH', { timeZone: 'Asia/Bangkok' });

    // ฟังก์ชันสำหรับเพิ่มค่า current queue
    const incrementCurrentQueue = () => {
        setCurrentQueue(currentQueue + 1);  // เพิ่มค่า current queue  ขึ้น 1
    };
    // ฟังก์ชันสำหรับลดค่า current queue
    const decrementCurrentQueue = () => {
        setCurrentQueue(currentQueue - 1);  // ลดค่า current queue  ลง 1
    };
    // ฟังก์ชันสำหรับรีเซ็ตค่า current queue
    const resetCurrentQueue = () => {
        setCurrentQueue(1);  // ตั้งค่า current queue กลับไปที่ 1
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#CA7257]">
            <h1 className="text-6xl text-white-900 p-3 font-bold mt-1">Queue </h1>
            <div className="bg-white shadow-md rounded-lg max-w-md w-full">

                {/* Queue Text Section */}
                <div className="mt-3 block p-2 justify-center">
                    <div className=" block justify-end">
                        <p className="text-center text-[#CA7257] text-9xl ml-7">
                            test <br />
                        </p>
                        <p className="text-center text-[#CA7257] text-3xl">
                            test <br />
                        </p>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center">
                    <p className="text-[#CA7257] text-2xl">
                        POSITION IN QUEUE <br />
                    </p>
                    <p className="text-black font-light text-xl">
                        {currentDate} <br />
                    </p>

                    <div className="mt-6 flex justify-between items-center">
                        {/* Placeholder for Image */}
                        <Image
                            src={locationImgame}
                            alt="Waiting Image"
                            width={30} // กำหนดขนาดที่ต้องการ
                            height={30}
                            className="object-contain mr-2"
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

export default QueuePage;
