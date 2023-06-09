import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { Inter } from 'next/font/google'
import Link from 'next/link'




const inter = Inter({ subsets: ['cyrillic'] })


const Login = () => {
  return (
    <main className="min-h-screen items-center justify-between ">
      <div className=' min-h[200px] bg-[#F2F2F2] mt-0.5 h-[100vh] w-80
      shadow-80 rounded-2xl'>
        <section className="bg-[#FFF] rounded-2xl h-[150] text-[#000] font-bold">
        <Image src="/logo.png" 
          alt="logo" 
          width={200}
          height={40}
          className='ml-16 pt-16'/>
          <div className='flex flex-row relative space-x-20 ml-6'>
            <div className=' flex  border-b-2 border-[#FFC83A] w-28 '>
              <Link href={'/Login'}><h3 className='w-11 pb-2 ml-8'>Login</h3></Link></div>
            <div><Link href={'/Sign_Up'}><h3>Sign-up</h3></Link></div></div>
         
      </section>
      <form action="" className='pl-9 text-[#484747]'>
        <div className='pt-12'>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" 
          placeholder='@gmail.com' className="bg-transparent  w-64
          border-b-2 border-[#000]" />
        </div>
         <div className='pt-12'>
          <label htmlFor="password" >Password </label>
          <input type="password" name="password" id="password" 
         placeholder='********' className="bg-transparent  w-64
          border-b-2 border-[#000]"/>
          </div>
          <p className='flex items-center text-[#FF0000] pt-4'>Forgot password</p>

      </form>

      
      <div className="ml-4 mt-32 w-72 text-[#000] 
    rounded-full hover:border bg-[#FFC83A] border-x-4 border-[#FFC83A] hover:bg-[#FFF]
      hover:text-[#FFC83A]">
        <Button buttonText={'Login'} buttonLink={'/Homepage'}/>
      </div>
      
      
      </div>
        
    </main>
  )
}

export default Login
 