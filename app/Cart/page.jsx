import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'
import { MdOutlineSwipe } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import Button from '../Button'
import Hoodswork from '../Hoodswork/page'

const inter = Inter({ subsets: ['cyrillic'] })

const Cartpage = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] text-[#000] bg-[#F9F9F9] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
       
        {/* ICONS */}

        <div className="pt-12 space-x-28 pb-11 pl-6 flex flex-row  font-bold">
        <TfiAngleLeft className='pt-1 text-2xl'/> <p>Cart</p>
        </div>
        <div className='flex flex-row items-center ml-16'>
          <MdOutlineSwipe className='text-xl'/><p className='font-semibold text-xs'>swipe on an item to delete</p>
        </div>
    <section>
        <div>
              <div className='bg-[#FFC83A] rounded-full h-10 w-10 ml-48 absolute mt-10'>
                <AiOutlineHeart className='text-center ml-1 pt-2 text-3xl'/>
              </div>
              <div className='bg-[#FFC83A] rounded-full h-10 w-10 ml-60 absolute mt-10'>
                <RiDeleteBinLine className='text-center ml-1 pt-2 text-3xl'/>
              </div>
        </div>
        <div className='bg-[#FFF] h-[12vh] ml-8 mt-4 w-64 rounded-lg absolute'> 
                                    <Image src={"/veggie tomato.png"} 
                                    alt={"veggie tomato"} 
                                    width={100} 
                                    height={0}
                                    className='absolute'/> 

                                              
            <h3 className='ml-24 pt-3 text-sm font-bold'>Veggie tomato mix</h3>
            <p className='text-[#FFC83A] ml-24'>#1,900</p>                                       
        </div>
    </section>
    <section className='mt-28'>
        <div>
              <div className='bg-[#FFC83A] rounded-full h-10 w-10 ml-48 absolute mt-10'>
                <AiOutlineHeart className='text-center ml-1 pt-2 text-3xl'/>
              </div>
              <div className='bg-[#FFC83A] rounded-full h-10 w-10 ml-60 absolute mt-10'>
                <RiDeleteBinLine className='text-center ml-1 pt-2 text-3xl'/>
              </div>
        </div>
        <div className='bg-[#FFF] h-[12vh] ml-8 mt-4 w-64 rounded-lg absolute'> 
                                    <Image src={"/veggie tomato.png"} 
                                    alt={"veggie tomato"} 
                                    width={100} 
                                    height={0}
                                    className='absolute'/> 

                                              
            <h3 className='ml-24 pt-3 text-sm font-bold'>Veggie tomato mix</h3>
            <p className='text-[#FFC83A] ml-24'>#1,900</p>                                       
        </div>
    </section>
    <section className='mt-56'>
        <div>
              <div className='bg-[#FFC83A] rounded-full h-10 w-10 ml-48 absolute mt-10'>
                <AiOutlineHeart className='text-center ml-1 pt-2 text-3xl'/>
              </div>
              <div className='bg-[#FFC83A] rounded-full h-10 w-10 ml-60 absolute mt-10'>
                <RiDeleteBinLine className='text-center ml-1 pt-2 text-3xl'/>
              </div>
        </div>
        <div className='bg-[#FFF] h-[12vh] -ml-20 mt-4 w-64 rounded-lg absolute'> 
                                    <Image src={"/veggie tomato.png"} 
                                    alt={"veggie tomato"} 
                                    width={100} 
                                    height={0}
                                    className='absolute'/> 

                                              
            <h3 className='ml-24 pt-3 text-sm font-bold'>Veggie tomato mix</h3>
            <p className='text-[#FFC83A] ml-24'>#1,900</p>                                       
        </div>
    </section>
            
            
    {/* BUTTON */}

      <div className="ml-4 mt-96 pt w-72 bg-[#FFC83A] text-[#000] 
    rounded-full hover:border hover:bg-[#FFF]
      hover:text-[#000]">
        <Button buttonText={'Order now'} buttonLink={'/Login'}/>
      </div>
      </div>
        
    </main>
  )
}

export default Cartpage
