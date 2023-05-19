import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'
import { MdOutlineSwipe } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import Button from '../Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['cyrillic'] })

const Address = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] text-[#000] bg-[#F9F9F9] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
       
        {/* ICONS */}

        <div className="pt-12 space-x-24 pb-11 pl-6 flex flex-row  font-bold">
        <Link href={'/Cart'}><TfiAngleLeft className='pt-1 text-2xl'/></Link> <p>Address</p>
      </div>
      <h2 className='ml-8 text-2xl font-semibold'>Delivery</h2>

      <div className='flex flex-row  space-x-24 ml-8 mt-6'>
                        <h3>Address detials</h3>
                        <p>Change</p>
      </div>

        
        <div className='bg-[#FFF] h-[22vh] ml-8 mt-4 w-64 rounded-lg absolute'> 
            <p className='text-base font-semibold border-b-2 pb-2 border-black w-56 m-2'>askskdk</p>
            <p className='text-base border-b-2 pb-2 border-black w-56 m-2'>a,,smsm</p>
            <p className='text-base border-b-2 pb-2 border-black w-56 m-2'>akskssd</p>                             
                                                   
        </div>

    
            
            
    {/* BUTTON */}

      <div className="ml-4 mt-96 pt w-72 bg-[#FFC83A] text-[#000] 
    rounded-full hover:border hover:bg-[#FFF]
      hover:text-[#000]">
        <Button buttonText={'Confirm address'} buttonLink={'/Checkout'}/>
      </div>
      </div>
        
    </main>
  )
}

export default Address
