import React from 'react'
import { MdOutlineAccessTime } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { TfiAngleLeft } from 'react-icons/tfi';
import Button from '../Button';
import Image from 'next/image'
import Link from 'next/link';

const Map = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] bg-[#F2F1F1] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
        <div className='h-[50vh]'>
        <Link href={'/Checkout'}><TfiAngleLeft className='pt-10 pl-2 text-6xl text-[#000]'/></Link>

        </div>

        <div className='h-[50vh] bg-[#fff] rounded-2xl text-[#000]'>
          <div className='flex flex-row pt-7'>
              <div className='rounded-full bg-[#FFC83A] w-8 h-8 ml-8'>
                <MdOutlineAccessTime className='pt-2 pl-2 text-2xl'/>
              </div>
              <div className='ml-4 text-xs font-medium text-[#9D9D9D]'><h4>Delivery Time</h4> 
              <p className='text-[#000] font-bold'>03:00PM (Max 20 min)</p></div>
          </div>
            <div className=' w-1 h-10 ml-10 mt-1 border-dashed border-l-2 border-[#FFC83A]'></div>
          
            <div className='flex flex-row pt-3'>
              <div className='rounded-full bg-[#FFC83A] w-8 h-8 ml-8'>
                <IoLocationOutline className='pt-2 pl-2 text-2xl'/>
              </div>
              <div className='ml-4 text-xs font-medium text-[#9D9D9D]'><h4>Delivery Adress</h4> 
              <p className='text-[#000] font-bold'>Lyari, Karachi</p></div>
            </div>
            <div className='h-20 bg-[#F2F1F1] ml-8 mr-8 mt-3 rounded-xl'>
              <div className='flex flex-row'>
              <Image src="/boy Imoji.png" 
              alt="boy image" 
              width={30}
              height={40}
              className='ml-3 pt-3'/>
              <p className='pt-5 pl-3 pr-5 font-semibold'>Ayan Khatri</p>
              <Image src="/tel.png" 
              alt="boy image" 
              width={50}
              height={40}
              className='ml-3 pt-3'/>

              </div>

            </div>
            <div className="ml-4 mt-8 w-72 text-[#000] rounded-full hover:border bg-[#FFC83A] 
            hover:bg-[#FFF] hover:text-[#FFC83A]">
            <Button buttonText={'Check Details'} buttonLink={'/Completed'}/>
            </div>
        </div>
        
        
      </div>
        
    </main>
  )
}

export default Map
