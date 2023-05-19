import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'
import Foodresult from './components/Foodresult'
import FoodresultR from './components/FoodresultR'
import Link from 'next/link'



const inter = Inter({ subsets: ['cyrillic'] })

const Foodselected = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      

      <div className=' min-h[200px] bg-[#F2F2F2] m-auto  text-[#000] h-[100vh] w-80
      shadow-80 rounded-2xl'>

        {/* ICONS */}

        <div className="pt-12 pb-11 pl-6 flex flex-row space-x-4 font-bold">
        <Link href={'/Homepage'}><TfiAngleLeft className='pt-1 text-2xl'/></Link>
        <h3>Chicken Biryani</h3>
        </div>

      <div className='bg-[#F9F9F9] rounded-3xl h-[85vh] '>
      {/* HEADER */}

      <h1 className=" pt-12 text-center text-2xl font-extrabold">Found 6 results</h1>

      
      {/* FOOD SECTION */}

      <section className='flex flex-row h-[72vh] overflow-y-auto bg-[#F9F9F9]'>
         
        <aside>
        <Link href={'/Productdetails'}><Foodresult/></Link>
        </aside>

        <aside>
        <Link href={'/Productdetails'}><FoodresultR/></Link>
        </aside>

      </section>
      </div>

      </div>
        
    </main>
  )
}

export default Foodselected
