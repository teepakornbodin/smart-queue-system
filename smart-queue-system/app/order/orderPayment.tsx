import pogslide from '../images/pog-slide.png'
import pog from '../images/pog.png'
import egg from '../images/eggs.png'
import mama from '../images/mama.png'
import mushroom from '../images/mushroom.png'
import taohu from '../images/taohu.png'
import lessIcon from '../images/lessIcon.png'
import plusIcon from '../images/plusIcon.png'
import cartIcon from '../images/cartIcon.png'


const OrderPayment = () => {
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-r from-orange-800 to-orange-800 pt-5">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-white">
                ชาบูเสียบไม้
            </h1>
            <div className="relative flex items-center justify-center min-h-screen">
                
                <div className="bg-white p-20 rounded-lg shadow-lg">
                    <div className="flex justify-center">
                        <img src={pogslide.src} alt="pogslide" className="rounded-lg"/>
                        <div className='flex'>
                            
                            <img src={lessIcon.src} alt="lessIcon" className="rounded-lg" />
                            <img src={plusIcon.src} alt="plusIcon" className="rounded-lg" />
                            <img src={cartIcon.src} alt="cartIcon" className="rounded-lg" />


                    </div>
                    <img src={pog.src} alt="pog" className="w-40 h-40 object-cover rounded-lg" />
                </div>

                <div className="flex justify-center">
                    <img src={egg.src} alt="egg" className="w-40 h-40 object-cover rounded-lg" />
                    <img src={mama.src} alt="mama" className="w-40 h-40 object-cover rounded-lg" />

                </div>

                <div className="flex justify-center">
                    <img src={mushroom.src} alt="mushroom" className="w-40 h-40 object-cover rounded-lg" />
                    <img src={taohu.src} alt="taohu" className="w-40 h-40 object-cover rounded-lg" />
                </div>

                <div className="mt-5">
                    <h1 className="text-2xl font-bold text-center">
                        ชาบูเสียบไม้
                    </h1>
                    <p className="text-center">
                        ราคา 299 บาท
                    </p>
                </div>

                <div className="mt-5">
                    <button className="w-full bg-orange-800 text-white p-2 rounded-md">
                        ชำระเงิน
                    </button>
                </div>
            </div>
        </div>
            </div >
            );
};

export default OrderPayment;