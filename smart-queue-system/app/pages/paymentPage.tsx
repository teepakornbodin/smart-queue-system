"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import qrImage from "../images/qrCode.png";
// import { FiArrowLeft } from "react-icons/fi";
import router, { useRouter } from "next/router";
import Link from 'next/link';

const PaymentPage: React.FC = () => {
  const [price, setPrice] = useState(50) //ไว้เชื่อมกับหน้าที่แล้ว
  const [timeLeft, setTimeLeft] = useState(300); // 300 วินาที (5 นาที)
  // const router = useRouter();
  useEffect(() => {
    // อัปเดตเวลาทุกๆ วินาที
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // ตั้งเวลา 5 นาที (300,000 มิลลิวินาที) และเปลี่ยนหน้าเมื่อหมดเวลา
    const timer = setTimeout(() => {
      router.push("/headerPage");
    }, 300000);

    // ล้าง interval และ timer เมื่อ component ถูก unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  //handle button
  const handleOkayButton = () => {
    router.push("/headerPage");
  };

  return (
    <div className="min-h-screen grid items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        {/* header */}
        <div className="bg-[#CA7257] rounded-lg relative flex justify-center p-1.5 mt-1.5">
          <button className="absolute left-2">
            {/* <FiArrowLeft color="white" /> */}
          </button>
          <div>
            <p className="text-white text-xs">ชำระเงิน</p>
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
          <div className="bg-[#045188] border-1 border-red-200 rounded-lg">
            <p className=" text-center text-white text-xs px-4 py-2">
              สแกน QR เพื่อชำระเงิน
              <br />
              ยอดชำระ {price} บาท
            </p>
          </div>
        </div>

        {/* Timer Message */}
        <p className="mt-4 text-red-500 text-center text-xs">
          กรุณาชำระเงินภายใน {formatTime(timeLeft)} นาที
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-xs">
            ยกเลิก
          </button>
          <Link href={'/headerPage'}>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-xs"
            onClick={handleOkayButton}>
              ตกลง
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
