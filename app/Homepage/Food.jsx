import React from 'react'
import Image from 'next/image'
import plate_rice from '/public/Mask Group.png'
import plate_fish from '/public/fish sauce.png'

const Food = () => {
  const productData=[
    {
      photo: plate_rice,
      Name: 'Chicken Briyani',
      Price: 800,
    },
    {
      photo: plate_fish,
      Name: 'Chicken Briyani',
      Price: 800,
    },
  ]

  const products = productData.map(product => (
 
    <div className="flex flex-col pt-12 ">
        <aside className='h-20 w-40 bg-[#FFFF] rounded-t-3xl'>
        <Image src={product.photo}  
          alt={product.alt} 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-12 pt-4 pb-7 text-xl w-40 rounded-b-3xl'>
        <h3>{product.Name}</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>${product.Price}</h4>
        </aside>
      </div>
   ))
   
  return (
    <div className=' flex flex-row space-x-8 overflow-x-auto mr-8 ml-8'>
      {products}
    </div>
  )
}

export default Food
