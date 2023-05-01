import Link from 'next/link'
import React from 'react'

export default function Button(props) {
  return (
    <Link href={props.buttonLink}>
    <div className='font-serif shadow-2xl bg-transparent rounded-full h-16'>
      <div className='text-center py-5'>{props.buttonText}</div>
    </div>
    </Link>
  )
}
