import React from 'react'
import Image from 'next/image'
import plate_rice from '/public/Mask Group.png'

function PlateFood () {
  const productData=[
    {
      photo: plate_rice,
      Name: 'Chicken Biryani',
      Price: 800,
    },
    
  ]

  const products = productData.map(product => (
 
    <div className='text-center mr-8 ml-8 relative'>
    <Image src={product.photo} 
      alt={product.alt} 
      width={200}
      height={5}
      className='relative'
      />
      <h2 className=' text-lg font-semibold'>{product.Name}</h2>
      <h4 className='text-[#FFC83A]'>${product.Price}</h4>
    </div>
   ))

   return (
     <div className='flex flex-row space-x-8 overflow-x-auto mr-8 ml-8'>
       {products}
     </div>
 )
}

export default PlateFood
