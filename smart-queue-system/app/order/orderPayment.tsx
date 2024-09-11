"use client"
import Image from "next/image";
import { orderData } from "./orderData";
import { useState, useEffect } from "react";
import lessIcon from '../images/lessIcon.svg';
import plusIcon from '../images/addIco.svg';
import cartIcon from '../images/cartIcon.png';
import cartIcon2 from '../images/cartIcon2.png';

const OrderPayment = () => {
    const [quantities, setQuantities] = useState<number[]>(orderData.map(() => 0));
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const newTotal = quantities.reduce((total, quantity) => total + quantity * 10, 0);
        setTotal(newTotal);
    }, [quantities]);

    const handleIncrease = (index: number) => {
        setQuantities(quantities.map((quantity, i) => i === index ? quantity + 1 : quantity));
    };

    const handleDecrease = (index: number) => {
        setQuantities(quantities.map((quantity, i) => i === index && quantity > 0 ? quantity - 1 : quantity));
    };

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-r from-orange-800 to-orange-800 pt-5">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-white">
                ชาบูเสียบไม้
            </h1>
            <div>
                <div className="bg-white p-5 rounded-3xl shadow-lg mt-11">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 ">
                        {orderData.map((data, index) => (
                            <div key={index} className="">
                                <div className="items-center">
                                    <Image src={data.image} alt="product" width={350} height={350} />
                                    <div className="ml-5">
                                        <h1 className="text-lg font-bold text-center mt-2">{data.name}</h1>
                                        <h1 className="text-lg font-bold text-center">{quantities[index] * 10}฿</h1>
                                        <div className="flex items-center justify-center mt-2">
                                            <button onClick={() => handleDecrease(index)}>
                                                <Image src={lessIcon} alt="less" width={30} height={30} />
                                            </button>
                                            <h1 className="text-lg font-bold text-center mx-7">{quantities[index]}</h1>
                                            <button onClick={() => handleIncrease(index)}>
                                                <Image src={plusIcon} alt="plus" width={30} height={30} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h1 className="text-lg font-bold text-center mt-6 flex">
                            Total: ฿{total}
                        </h1>
                        <button className="w-full bg-orange-800 text-white p-2 rounded-md hover:bg-orange-700 transition duration-300">
                            ยืนยันรายการสินค้า
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPayment;