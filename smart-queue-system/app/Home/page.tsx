// pages/index.js
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bg from '../images/bgHeader.svg';
import intro from '../images/intro.svg';
import User from '../images/user.svg';
import { SetStateAction, useState } from 'react';
import { Inter, Mitr } from 'next/font/google';

const inter = Inter({ weight: ['700'], subsets: ['latin'] });
const mitr = Mitr({ weight: ['400'], subsets: ['thai'] });

const HeaderPage = () => {
  const [userName, setUserName] = useState<string>('');
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setButtonDisable(e.target.value.trim() === '');
  };

  const handleClick = () => {
    if (userName.trim()) {
      router.push('/SelectShop');
    } else {
      // Optional: Provide feedback if needed
      console.log('Please enter your name before proceeding.');
    }
  };
  
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col p-4 w-full relative"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="mt-10 ml-6">
        <Image src={intro} alt="intro" />
      </div>
      <div className="flex flex-col justify-between items-center" style={{ marginTop: '17.5rem' }}>
        <div className='mb-20'>
          <Image src={User} alt="User" />
        </div>
        
        <div className="px-4 mb-10">
          <input
            type="text"
            placeholder="พิมพ์ชื่อของคุณ......"
            value={userName}
            onChange={handleInput}
            className={`bg-white text-black px-10 py-4 rounded-full text-center shadow-lg border-2 border-[#CA7257] w-full max-w-md text-xl font-semibold ${mitr.className}`}
          />
        </div>

        <div className="bt-10">
          <button onClick={handleClick} className={`bg-[#CA7257] text-white px-6 py-3 rounded-full shadow-lg ${inter.className}`}>
            <h2 className="text-lg font-semibold">ยืนยัน</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;