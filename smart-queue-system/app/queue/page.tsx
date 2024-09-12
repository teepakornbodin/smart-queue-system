"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import waitImgame from '../images/queue1.png';
import locationImgame from "../images/location_logo.png";


const QueuePage: React.FC = () => {
    const [queue, setQueue] = useState(1);
    const [ordinalNum, setOrdinalNum] = useState('');
    const currentDate = new Date().toLocaleDateString('th-TH', { timeZone: 'Asia/Bangkok' });
    const currentTime = new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' });

    // ฟังก์ชันสำหรับเพิ่มค่า queue
    const incrementQueue = () => {
        setQueue(queue + 1);  // เพิ่มค่า queue ขึ้น 1
    };

    // ฟังก์ชันสำหรับลดค่า queue
    const decrementQueue = () => {
        setQueue(queue - 1);  // ลดค่า queue ลง 1
    };

    // ฟังก์ชันสำหรับรีเซ็ตค่า queue
    const resetQueue = () => {
        setQueue(1);  // ตั้งค่า queue กลับไปที่ 0
    };

    // ฟังก์ชันสำหรับเซ็ตค่า Ordinal number
    function getOrdinalSuffix(number: number): string {
        const remainder10 = number % 10;
        const remainder100 = number % 100;
        if (remainder100 >= 11 && remainder100 <= 13) {
            return `th`;  // เลขที่ลงท้ายด้วย 11, 12, 13 ใช้ th เสมอ
        }

        switch (remainder10) {
            case 1:
                return `st`;  // เลขที่ลงท้ายด้วย 1 ใช้ st
            case 2:
                return `nd`;  // เลขที่ลงท้ายด้วย 2 ใช้ nd
            case 3:
                return `rd`;  // เลขที่ลงท้ายด้วย 3 ใช้ rd
            default:
                return `th`;  // เลขอื่น ๆ ใช้ th
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#CA7257]">
            <h1 className="text-6xl text-white-900 p-3 font-bold mt-1">Queue </h1>
            <div className="bg-white shadow-md rounded-lg max-w-md w-full">

                {/* Queue Text Section */}
                <div className="mt-6 flex p-2 justify-center">
                    <div className="mt-6 flex justify-end">
                        <p className="text-center text-[#CA7257] text-9xl">
                            {queue} <br />
                        </p>
                        <p className="text-[#CA7257] text-3xl">
                            {getOrdinalSuffix(queue)} <br />
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

export default QueuePage;
