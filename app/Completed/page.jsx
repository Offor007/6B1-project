import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'
import { AiFillStar } from 'react-icons/ai'
import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['cyrillic'] })

const Completed = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] text-[#000] bg-[#F9F9F9] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
       
        {/* ICONS */}

        <div className="pt-12 space-x-24 pb-11 pl-6 flex flex-row  font-bold">
        <Link href={'/Checkout'}><TfiAngleLeft className='pt-1 text-2xl'/></Link>
      </div>
      
      <h2 className='ml-8 text-2xl font-bold'>COMPLETED ORDER</h2>

      <Image
      scr={'/well-done-gif-17 1.png'}
      alt={'well-done-gif-17'}
      width={300}
      height={200}/> 
      
      <h3 className='ml-32 font-bold '>Review</h3>

      <div className='flex flex-row pt-6 ml-11 mr-11'>
        <p className='font-bold'>Rating <span>5.0</span></p> 
        <span className='pt-1 pl-3 text-xl flex flex-row 
        text-[#FFC83A]'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
      </div>

     
      
        <div className='bg-[#FFF] h-[6vh] ml-8 mt-4 w-64 rounded-lg'> 
                                                                            
            <h3 className='ml-2 pt-3 text-sm font-base'>reviews</h3>
                                                  
        </div>
            
    {/* BUTTON */}
      <div className='flex flex-row'>
          <div className="ml-6 mt-10 pt w-32 bg-[#FFC83A] text-[#000] 
          rounded-full hover:border hover:bg-[#FFF]
         hover:text-[#000]">
          <Button buttonText={'Skip'} buttonLink={'/Login'}/>
          </div>
          <div className="ml-4 mt-10 pt w-32 bg-[#FFC83A] text-[#000] 
          rounded-full hover:border hover:bg-[#FFF]
         hover:text-[#000]">
          <Button buttonText={'feedback'} buttonLink={'/Login'}/>
          </div>
        </div>
      </div>
        
    </main>
  )
}

export default Completed
