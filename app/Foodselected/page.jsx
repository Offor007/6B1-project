import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TfiAngleLeft } from 'react-icons/tfi'



const inter = Inter({ subsets: ['cyrillic'] })

const Foodselected = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      

      <div className=' min-h[200px] bg-[#F2F2F2] m-auto  text-[#000] h-[100vh] w-80
      shadow-80 rounded-2xl'>

        {/* ICONS */}

        <div className="pt-12 pb-11 pl-6 flex flex-row space-x-4 font-bold">
        <TfiAngleLeft className='pt-1 text-2xl'/>
        <h3>Chicken Biryani</h3>
        </div>

      <div className='bg-[#F9F9F9] rounded-3xl h-[85vh] '>
      {/* HEADER */}

      <h1 className=" pt-12 text-center text-2xl font-extrabold">Found 6 results</h1>

      
      {/* FOOD SECTION */}

      <section className='flex flex-row h-[72vh] overflow-y-auto bg-[#F9F9F9]'>
         
        <aside>

      {/* FOOD-1 */}
      <div className="flex flex-col pt-12 pl-8">
        <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/Mask Group.png" 
          alt="pizza" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>Chicken <br/> Briyani</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>

      {/* FOOD-2 */}
      <div className="flex flex-col pt-12 pl-6">
        <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/fried chicken.png" 
          alt="Fish" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>Fried <br/> chicken m.</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>

      {/* FOOD-3 */}
      <div className="flex flex-col pt-12 pl-6">
        <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/veggie tomato.png" 
          alt="Fish" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>Veggie <br/> tomato mix</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>
      </aside>
      <aside>

      {/* FOOD-1 */}
      <div className="flex flex-col mt-16 pl-8">
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

      {/* FOOD-2 */}
      <div className="flex flex-col pt-12 pl-6">
        <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/moi moi.png" 
          alt="Fish" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>Moi-moi <br/> and ekpa.</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>

      {/* FOOD-3 */}
      <div className="flex flex-col pt-12 pl-6">
        <aside className='h-10 w-28 bg-[#FFFF] rounded-t-3xl'>
        <Image src="/eggs and cucumba.png" 
          alt="Fish" 
          width={200}
          height={0}
          className='relative py-0.5 -top-8'
          />
 
        </aside>
        <aside className='bg-[#FFFF] font-semibold pl-6 pt-4 pb-7 text-xl w-28 rounded-b-3xl'>
        <h3>Eggs and<br/>cucmber...</h3>
        <h4 className='text-[#FFC83A] text-base pt-2'>Rs 800</h4>
        </aside>
      </div>
      </aside>
      </section>
      </div>

      </div>
        
    </main>
  )
}

export default Foodselected
