// pages/index.js
import Image from 'next/image';
import Image1 from '../images/food2.png';
import Image2 from '../images/food3.png';
import Image3 from '../images/food1.png';

const headerPage = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-between items-center p-4">
      <h1 className="text-4xl font-bold mt-11">EN Smart Queue</h1>
      <div className="flex-grow flex justify-center items-center">
        <input
          type="text"
          placeholder="พิมพ์ชื่อของคุณ......"
          className="bg-white text-black px-4 py-2 rounded-full text-center shadow-lg border-2 border-black"
        />
      </div>
      
      <div className="mb-10">
        <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg">
          <h2>ยืนยัน</h2>
        </button>
      </div>

      <div className="flex justify-between w-full px-10 mb-4">
        <div className="relative w-32 h-32">
          <Image
            src={Image1} // path ของรูปอาหารที่ 1
            alt="Food 1"
            // layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="relative w-32 h-32">
          <Image
            src={Image2} // path ของรูปอาหารที่ 2
            alt="Food 2"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="relative w-32 h-32">
          <Image
            src={Image3} // ใช้รูปจากการ import มา
            alt="Food 3"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
export default headerPage;