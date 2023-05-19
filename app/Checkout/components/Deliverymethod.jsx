import React from 'react'

function Deliverymethod() {
  return (
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
  )
}

export default Deliverymethod
