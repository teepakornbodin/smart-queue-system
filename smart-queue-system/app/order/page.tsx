"use client";
import Image from "next/image";
import { orderData } from "./orderData";
import { useState, useEffect } from "react";
import lessIcon from '../images/lessIcon.svg';
import plusIcon from '../images/addIco.svg';
import cartIcon from '../images/cartIcon.png';
import cartIcon2 from '../images/cartIcon2.png';
import { useRouter } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from '../../redux/store'
import { addMenu, decreaseQuantityMenu} from "@/redux/slices/counterSlice";
import HeaderTitle from "@/components/headerTitle";

const OrderPayment = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const menuLists = useSelector((state: RootState) => state.menu.menuLists)
    const [quantitie, setQuantities] = useState(orderData.map(() => 0));

    const handleIncrease = (index: number, menu: string, img: any) => {
        const newQuantities = quantitie.map((quantity, i) => i === index ? quantity + 1 : quantity);
        setQuantities(newQuantities);
        dispatch(addMenu({ menu, img, quantities: newQuantities[index] }));
    };

    const handleDecrease = (index: number, menu: string) => {
        setQuantities(quantitie.map((quantity, i) => i === index && quantity > 0 ? quantity - 1 : quantity));
        dispatch(decreaseQuantityMenu(menu))
    };

    const total = quantitie.reduce((total, quantity) => total + quantity * 10, 0)

    const confirmOrder = () => {
        router.push('/ConfirmOrder')
    }

    const backToSelectShop = () => {
        router.push('/SelectShop')
    }

    return (
        <div className={`relative min-h-screen w-full bg-primary pt-5`}>
            <HeaderTitle title={"ชาบูเสียบไม้"} link={backToSelectShop}/>
            <div>
                <div className="bg-white p-5 rounded-t-3xl shadow-lg mt-11">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                        {orderData.map((data, index) => (
                            <div key={index} className="">
                                <div className="items-center">
                                    <Image src={data.image} alt="product" width={350} height={350} />
                                    <div className="ml-5">
                                        <h1 className="text-lg text-center mt-2">{data.name}</h1>
                                        <h1 className="text-lg text-center">{quantitie[index] * 10}฿</h1>
                                        <div className="flex items-center justify-center mt-2">
                                            <button onClick={() => handleDecrease(index, data.name)}>
                                                <Image src={lessIcon} alt="less" width={30} height={30} />
                                            </button>
                                            <h1 className="text-lg text-center mx-7">{quantitie[index]}</h1>
                                            <button onClick={() => handleIncrease(index, data.name, data.image)}>
                                                <Image src={plusIcon} alt="plus" width={30} height={30} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h1 className="text-lg text-center mt-6 flex">
                            <Image src={cartIcon} alt="cart" width={30} height={30} />
                            Total: ฿{total}
                        </h1>
                        <button
                            className="w-full bg-primary text-white p-2 rounded-md hover:bg-orange-700 transition duration-300 transform hover:scale-105"
                            onClick={confirmOrder}
                        >
                            ยืนยันรายการสินค้า
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPayment;