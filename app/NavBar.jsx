import React from 'react'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { RxCountdownTimer } from "react-icons/rx"

export default function NavBar() {
  return (
    <div className='flex flex-row w-80 text-2xl pl-7 mt-14 space-x-12'>
      <div className='text-[#FFC83A]'><Link href={'/Homepage'}><AiFillHome/></Link></div>
      <div className='text-[#9A9A9D]'><Link href={'/'}><AiOutlineHeart/></Link></div>
      <div className='text-[#9A9A9D]'><Link href={'/Profilepage'}><BsPerson/></Link></div>
      <div className='text-[#9A9A9D]'><Link href={'/'}><RxCountdownTimer/></Link></div>
      
    </div>
  )
}
