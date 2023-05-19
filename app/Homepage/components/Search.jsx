"use client";

import Link from 'next/link';
import React, {useState} from 'react'
import { BiSearch, } from 'react-icons/bi'


function Search () {

     

  return (
    <div className='flex flex-row relative bg-[#EFEEEE] rounded-full mx-8 my-6'>
      <BiSearch className='pt-3 pb-3 text-5xl'/>
      <input type="search" name="Search" id="search" placeholder='Search' 
      className='w-52 rounded-full bg-transparent outline-none border-none ' />
      </div>
  )
}

export default Search

/* function Search() {
  return (
    <div className='flex flex-row relative bg-[#EFEEEE] rounded-full mx-8 my-6'>
      <BiSearch className='pt-3 pb-3 text-5xl'/>
      <input type="search" name="Search" id="search" placeholder='Search' 
      className=' w-52 rounded-full bg-transparent ' />
      </div>
  )
} */

/* return ( 
  <>
    {/* <div className='pt-[60px] ' > }*/
      /*{ <div className='flex flex-row pl-[40px] pt-[60px] move-up'>

          <div className='text-2xl 
          pt-4 '>
              <Link href='./Homepage/Food'><FiChevronLeft/></Link>
          </div>
          <div className='flex flex-row items-center  w-[256px] bg-transparent rounded-[30px]  m-auto'>
          <span className=' text-[#727272] pl-5 flex text-2xl pr-3'><RiSearchLine/></span>
          <input  className='bg-transparent h-[60px]  outline-none border-none placeholder:text-[14px]' type='text' placeholder='Search' onChange={(e) => searchItems(e.target.value)}/>
      </div>
     
    </div>
    <div className=' flex flex-col items-center w-[100%] h-[83%] mt-8 bg-[#f9f9f9] rounded-tr-[30px] rounded-tl-[30px] move-up'>
      {searchInput.length > 1 ?(
        <h1 className='mt-[35px] text-[28px] font-bold'>
          {filteredResults.length == 1 ? `Found ${filteredResults.length} result`:
          filteredResults.length == 0 ? null :
          `Found ${filteredResults.length} results`
        }
        </h1>
      ) : null
      }
      <div>

      </div>
      <div className='flex flex-row flex-wrap '>
      {foodlists}
      </div> 
    </div> }*/
