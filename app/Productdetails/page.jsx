import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '../Button'
import { TfiAngleLeft } from 'react-icons/tfi'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'


const inter = Inter({ subsets: ['cyrillic'] })

const productDetail = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] text-[#000] bg-[#F9F9F9] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
       
        {/* ICONS */}

        <div className="pt-12 space-x-56 pb-11 pl-6 flex flex-row font-bold">
        <TfiAngleLeft className='pt-1'/><AiOutlineHeart/>
      
        </div>

        <section className='flex flex-row'>

        <div className='h-[35vh] text-center'>
        <Image src="/Mask Group.png" 
          alt="pizza" 
          width={300}
          height={0}
          className='absolute'
          />
          <h2 className='mt-56 ml-20 text-lg font-semibold'>Chicken Biryani</h2>
          <h4 className='text-[#FFC83A] ml-24'>Rs 800</h4>
         </div>
        

      </section>
      <div className='flex flex-row pt-6 ml-11 mr-11 border-b-2 border-b-black'>
        <p className='font-semibold'>Rating <span>5.0</span></p> <span className='pt-1 pl-3 flex flex-row 
        text-[#FFC83A]'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
      </div>
      <div className='ml-11 mr-7 pt-2 text-[#]'>
        <h3 className='font-semibold'>Delivery info</h3>
        <p className='text-sm '>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</p>
      </div>
      <div className='ml-11 mr-7 pt-2'>
        <h3 className='font-semibold'>Return policy</h3>
        <p className='text-sm '>All our foods are double checked before leaving our stores so by any 
        case you found a broken food please contact our hotline immediately.</p>
      </div>
      
            
    {/* BUTTON */}

      <div className="ml-4 mt-5 w-72 bg-[#FFC83A] text-[#000] 
    rounded-full hover:border border-x-4 border-[#FFF] hover:bg-[#FFF]
      hover:text-[#000]">
        <Button buttonText={'Add to cart'} buttonLink={'/Login'}/>
      </div>
      </div>
        
    </main>
  )
}

export default productDetail
