import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { BiCartDownload } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineTag } from 'react-icons/hi'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { MdSecurity } from 'react-icons/md'
import Profile from './profile'
import Link from 'next/link'

const inter = Inter({ subsets: ['cyrillic'] })

const Profilepage = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
    <div className=' min-h[200px] bg-[#FFC83A] m-auto h-[100vh] text-[#000] w-80
    shadow-80 rounded-2xl'>
      
      <div className="pt-12 pb-11 pl-6 flex flex-row font-bold">
        <Link href={'/Homepage'}><TfiAngleLeft className='pt-1 text-2xl'/></Link>
      </div>

      
      {/* Profile */}
      <div className="border-b-2 pb-2 ml-8 mt-10 border-black w-36">
          <aside className='flex flex-row '>
          <CgProfile className='pt-1 text-2xl absolute'/>
          <p className='font-semibold ml-8'>Profile</p>
          </aside>
      </div>

      {/* Orders */}
      <div className="border-b-2 pb-2 ml-8 mt-6 border-black w-36">
          <aside className='flex flex-row '>
          <BiCartDownload className='pt-1 text-2xl absolute'/>
          <p className='font-semibold ml-8'>Orders</p>
          </aside>
      </div>

      {/* Offer and promo */}
      <div className="border-b-2 pb-2 ml-8 mt-6 border-black w-40">
          <aside className='flex flex-row '>
          <HiOutlineTag className='pt-1 text-2xl absolute'/>
          <p className='font-semibold ml-8'>Offer and promo</p>
          </aside>
      </div>

        {/* Privacy policy */}
      <div className="border-b-2 pb-2 ml-8 mt-6 border-black w-36">
          <aside className='flex flex-row '>
          <MdOutlineStickyNote2 className='pt-1 text-2xl absolute'/>
          <p className='font-semibold ml-8'>Privacy policy</p>
          </aside>
      </div>

      {/* Security */}
      <div className="pb-2 ml-8 mt-6 order-black w-36">
          <aside className='flex flex-row '>
          <MdSecurity className='pt-1 text-2xl absolute'/>
          <p className='font-semibold ml-8'>Security</p>
          </aside>
      </div>

      <Link href={'/Login'}><nav className='ml-8 flex flex-row mt-52 font-semibold'><h4>Sign out </h4><BsArrowRight className='text-lg mt-1 ml-2 '/></nav></Link>
  
    
    </div>
      
  </main>
  )
}

export default Profilepage
