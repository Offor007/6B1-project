import React from 'react'
import Image from 'next/image'
import plate_moi from '/public/Moi moi.png'
import plate_eggs from '/public/eggs and cucumba.png'
import Link from 'next/link'

const FoodresultR = () => {
  const foodData=[
    {
      photo:plate_eggs,
      Name:'eggs and cucumba',
      Price: 800
    },
    {
      photo:plate_moi,
      Name:'moi moi',
      Price: 800
    },
    {
      photo:plate_eggs,
      Name:'eggs and cucumba',
      Price: 800
    },
    {
      photo:plate_eggs,
      Name:'eggs and cucumba',
      Price: 800
    },

  ]

  const foods = foodData.map(food => (
    <div className="flex flex-col mt-20 pl-8">
        <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/eggs and cucumba.png" 
          alt="pizza" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>Egg and  <br/> cucmber...</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>

  ))
  return (
    <div>
      {foods}
    </div>
  )
}

export default FoodresultR
