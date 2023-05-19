import React from 'react'
import Image from 'next/image'
import plate_rice from '/public/Mask Group.png'
import plate_chicken from '/public/fried chicken.png'
import veggies from '/public/veggie tomato.png'
import Link from 'next/link'

const Foodresult=() => {
  const foodData = [
    {
      photo: plate_rice,
      Name: 'Chicken Briyani',
      Price: 800,
    },
    {
      photo: plate_chicken,
      Name: 'fried chicken',
      Price: 800,
    },
    {
      photo: veggies,
      Name: 'veggie tomato',
      Price: 800,
    },
    {
      photo: veggies,
      Name: 'veggie tomato',
      Price: 800,
    },
    {
      photo: veggies,
      Name: 'veggie tomato',
      Price: 800,
    },
    
    
  ]

  const foods = foodData.map(food => (
    <div className="flex flex-col pt-12 pl-8">
       <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src={food.photo} 
          alt={food.alt} 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>{food.Name}</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>{food.Price}</h4>
        </aside>
      </div>

  ))
  return (
    <div>
      {foods}
    </div>
  )
}

export default Foodresult
