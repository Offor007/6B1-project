import { Inter } from 'next/font/google'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import NavBar from '../NavBar'
import Search from './components/search'
import ToupOption from './components/ToupOption'
import Food from './Food'
import Link from 'next/link'


const inter = Inter({ subsets: ['cyrillic'] })

const Homepage = () => {
  return (
    <main className="min-h-screen items-center justify-between ">

      

      <div className=' min-h[200px] bg-[#F2F2F2] m-auto  text-[#000] h-[100vh] w-80
      shadow-80 rounded-2xl'>

        {/* ICONS */}

        <div className="pt-12 pl-6 flex flex-row space-x-56 text-2xl">
        <Link href={'/Profilepage'}> <CiMenuFries
        className='rotate-180'/></Link>
        <AiOutlineShoppingCart/>
        </div>

      {/* HEADER */}

      <h1 className=" pt-12 pl-6 text-2xl font-extrabold">Food for <br /> Everyone</h1>

      <Search/>

      <ToupOption/>

      <div className='mr-8 pt-4 text-right '><Link href={'/Foodselected'}><h5>see more</h5></Link></div>

      <Food/>

      <NavBar/>
      </div>
        
    </main>
  )
}

export default Homepage
