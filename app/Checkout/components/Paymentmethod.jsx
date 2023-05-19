import React from 'react'

function Paymentmethod() {
  return (
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
  )
}

export default Paymentmethod
