import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import NavBar from '../NavBar'


const inter = Inter({ subsets: ['cyrillic'] })

const Homepage = () => {
  return (
    <main className="min-h-screen items-center justify-between ">

      

      <div className=' min-h[200px] bg-[#F2F2F2] m-auto  text-[#000] h-[100vh] w-80
      shadow-80 rounded-2xl'>

        {/* ICONS */}

        <div className="pt-12 pl-6 flex flex-row space-x-56 text-2xl">
        <CiMenuFries
        className='rotate-180'/>
        <AiOutlineShoppingCart/>
        </div>

      {/* HEADER */}

      <h1 className=" pt-12 pl-6 text-2xl font-extrabold">Food for <br /> Everyone</h1>

      {/* SEARCH */}

      <div className='flex flex-row relative bg-[#EFEEEE] rounded-full mx-8 my-6'><BiSearch
      className='pt-3 pb-3 text-5xl'/>
      <input type="search" name="Search" id="search" placeholder='Search' className=' w-52 rounded-full bg-transparent ' /></div>

      {/* TOPUP OPTIONS */}

            <div className='flex flex-row relative space-x-9 ml-8 overflow-x-auto'>
            <div className=' flex  border-b-2 border-[#FFC83A] text-[#FFC83A] w-18 '>
              <h3 className='w-12 pb-2 ml-4'>Food</h3></div>
            <div className='text-[#9A9A9D]'><h3>Drinks</h3></div>
            <div className='text-[#9A9A9D]'><h3>Snacks</h3></div>
            <div className='text-[#9A9A9D]'><h3>Sauce</h3></div>
            </div>

      {/* SEE MORE */}

      <div className='mr-3 pt-4 text-right '><h5>see more</h5></div>

      {/* FOOD SECTION */}

      <section className='flex flex-row overflow-x-auto'>
      <div className="flex flex-col pt-12 pl-6">
        <aside className='h-20 w-40 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/Mask Group.png" 
          alt="pizza" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-12 pt-4 pb-7 text-xl w-40 rounded-b-3xl'>
        <h3>Chicken <br/> Briyani</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>
      <div className="flex flex-col pt-12 pl-6">
        <aside className='h-20 w-40 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/fish sauce.png" 
          alt="Fish" 
          width={290}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-12 pt-4 pb-7 text-xl w-40 rounded-b-3xl'>
        <h3>Spicy fish <br/> sauce</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>
      </section>

      {/* NAV-BAR */}

      <NavBar/>
      </div>
        
    </main>
  )
}

export default Homepage
