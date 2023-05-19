import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { RiBankFill } from 'react-icons/ri'
import { BsCashCoin } from 'react-icons/bs'
import Button from '../Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['cyrillic'] })

const Checkout = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] text-[#000] bg-[#F9F9F9] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
       
        {/* ICONS */}

        <div className="pt-12 space-x-24 pb-11 pl-6 flex flex-row  font-bold">
        <Link href={'/Address'}><TfiAngleLeft className='pt-1 text-2xl'/></Link><p>Checkout</p>
      </div>
      <h2 className='ml-8 text-2xl font-semibold'>Payment</h2>

      <div className='flex flex-row  ml-8 mt-6'>
                        <h3>Payment method</h3>
      </div>

        
        <section className='h-[22vh] ml-12 mt-4 w-64 rounded-lg '> 
            <div className='pt-3 '>
              <aside>
                <input type="radio" name="" id="" />
              </aside>
            <aside>
              <div className='text-base font-semibold border-b-2 pb-2 ml-4 border-black w-48 m-2 -mt-6'>
              <div className='bg-[#F47B0A] rounded-lg h-10 w-10'>
             <BsFillCreditCard2FrontFill className='text-center ml-1 pt-2 text-3xl text-[#FFF]'/>
              </div>
              </div>
            </aside> 
            </div>                 
            <div className=''>
              <aside>
                <input type="radio" name="" id="" />
              </aside>
            <aside>
              <div className='text-base font-semibold border-b-2 pb-2 ml-4 border-black w-48 m-2 -mt-6'>
              <div className='bg-[#EB4796] rounded-lg h-10 w-10'>
             <RiBankFill className='text-center ml-1 pt-2 text-3xl text-[#FFF]'/>
              </div>
              </div>
            </aside> 
            </div>                  
            <div className=''>
              <aside>
                <input type="radio" name="" id="" />
              </aside>
            <aside>
              <div className='text-base font-semibold border-b-2 pb-2 ml-4 border-black w-48 m-2 -mt-6'>
              <div className='bg-[#FFC83A] rounded-lg h-10 w-10'>
             <BsCashCoin className='text-center ml-1 pt-2 text-3xl text-[#FFF]'/>
              </div>
              </div>
            </aside> 
            </div>                  
                                                   
        </section>

        <div className='flex flex-row  ml-8 mt-6'>
                        <h3>Delivery method</h3>
        </div>

        <div className='bg-[#FFF] h-[18vh] ml-8 mt-4 w-64 rounded-lg'>
              <aside className='ml-4 pt-4'>
                <input type="radio" name="" id="" />
              </aside>
            <aside>
              <div className='text-base font-semibold border-b-2 pb-2 ml-10 border-black w-48 m-2 -mt-6'>
              <p>Door devivery</p>
              </div>
            </aside>

            <aside className='ml-4 pt-4'>
                <input type="radio" name="" id="" />
              </aside>
            <aside>
              <div className='text-base font-semibold border-b-2 pb-2 ml-10 border-black w-48 m-2 -mt-6'>
              <p>Pick up</p>
              </div>
            </aside>

          </div>

          <div className='flex flex-row ml-8 space-x-36'>
            <h3>Total</h3> <p className='text-lg font-bold'>Rs 11,000</p>
          </div>
  
            
    {/* BUTTON */}

      <div className="ml-4 mt-10 pt w-72 bg-[#FFC83A] text-[#000] 
    rounded-full hover:border hover:bg-[#FFF]
      hover:text-[#000]">
        <Button buttonText={'Proceed to payment'} buttonLink={'/Completed'}/>
      </div>
      </div>
        
    </main>
  )
}

export default Checkout
