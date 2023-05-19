import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from './Button'
import Hoodswork from './Hoodswork/page'

const inter = Inter({ subsets: ['cyrillic'] })

const Onboarding = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] bg-[#FFC83A] m-auto h-[100vh] w-80
      shadow-80 rounded-2xl'>
        <div className="pt-3">
          <Image src="/logo.png" 
          alt="logo" 
          width={200}
          height={2}
          />
        </div>
      <h1 className="pl-6 text-6xl font-extrabold">Food for Everyone</h1>
      <div className="flex pt-12">
        <aside className='pt-12'>
        <Image src="/pizza.png" 
          alt="pizza" 
          width={150}
          height={2}
          />
          <Image src="/bugger.png" 
          alt="bugger" 
          width={150}
          height={2}
          />
          
        </aside>
        <aside className='flex-col relative'>
        <Image src="/boy 1.png" 
          alt="boy" 
          width={200}
          height={2}
          className=''
          />
         
        </aside>
        <div className=' bg-[#f1ca65] h-[5vh] ml-5 w-72 mt-64 blur-md absolute'></div>
      </div>
      <div className="ml-4 mt-2.5 w-72 bg-[#FFFF] text-[#FFC83A] 
    rounded-full hover:bg-[#FFC83A]
      hover:text-[#FFFF]">
        <Button buttonText={'Get started'} buttonLink={'/Login'}/>
      </div>
      </div>
        
    </main>
  )
}

export default Onboarding
